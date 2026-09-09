const express = require('express');
const multer = require('multer');
const Question = require('../models/Question');
const { requireAuth } = require('../middleware/auth');
const { parseUploadedFile } = require('../utils/bulkParse');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

router.use(requireAuth); // every route below requires a logged-in teacher/admin

const REQUIRED_FIELDS = ['board', 'grade', 'chapterSlug', 'section', 'subtype', 'question'];

function missingFields(obj) {
  return REQUIRED_FIELDS.filter(f => obj[f] === undefined || obj[f] === null || obj[f] === '');
}

// GET /api/questions?board=&grade=&chapterSlug=&section=&subtype=&page=&limit=
router.get('/', async (req, res) => {
  const { board, grade, chapterSlug, section, subtype, page = 1, limit = 200 } = req.query;
  const filter = {};
  if (board) filter.board = String(board).toLowerCase();
  if (grade) filter.grade = String(grade);
  if (chapterSlug) filter.chapterSlug = chapterSlug;
  if (section) filter.section = String(section).toLowerCase();
  if (subtype) filter.subtype = String(subtype).toLowerCase();

  const skip = (Math.max(1, Number(page)) - 1) * Number(limit);
  const [items, total] = await Promise.all([
    Question.find(filter).sort({ order: 1, createdAt: 1 }).skip(skip).limit(Number(limit)),
    Question.countDocuments(filter)
  ]);
  res.json({ items, total, page: Number(page), limit: Number(limit) });
});

// POST /api/questions  (single add)
router.post('/', async (req, res) => {
  const body = { ...req.body };
  const missing = missingFields(body);
  if (missing.length) return res.status(400).json({ error: `Missing fields: ${missing.join(', ')}` });

  body.board = String(body.board).toLowerCase();
  body.section = String(body.section).toLowerCase();
  body.subtype = String(body.subtype).toLowerCase();
  body.createdBy = req.user.id;

  const doc = await Question.create(body);
  res.status(201).json(doc);
});

// PUT /api/questions/:id  (single edit)
router.put('/:id', async (req, res) => {
  const update = { ...req.body, updatedBy: req.user.id };
  delete update._id;
  const doc = await Question.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
  if (!doc) return res.status(404).json({ error: 'Question not found' });
  res.json(doc);
});

// DELETE /api/questions/:id  (single delete)
router.delete('/:id', async (req, res) => {
  const doc = await Question.findByIdAndDelete(req.params.id);
  if (!doc) return res.status(404).json({ error: 'Question not found' });
  res.json({ deleted: true, id: req.params.id });
});

// DELETE /api/questions  (bulk delete)
// body: { ids: [...] }  OR  { board, grade, chapterSlug, section, subtype } to wipe a whole bucket
router.delete('/', async (req, res) => {
  const { ids, board, grade, chapterSlug, section, subtype } = req.body || {};

  if (Array.isArray(ids) && ids.length) {
    const result = await Question.deleteMany({ _id: { $in: ids } });
    return res.json({ deletedCount: result.deletedCount });
  }

  if (board && grade && chapterSlug && section && subtype) {
    const result = await Question.deleteMany({
      board: String(board).toLowerCase(),
      grade: String(grade),
      chapterSlug,
      section: String(section).toLowerCase(),
      subtype: String(subtype).toLowerCase()
    });
    return res.json({ deletedCount: result.deletedCount });
  }

  return res.status(400).json({
    error: 'Provide either { ids: [...] } or the full { board, grade, chapterSlug, section, subtype } filter'
  });
});

// POST /api/questions/bulk-import  (multipart: file + default board/grade/chapterSlug/section/subtype)
router.post('/bulk-import', upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded (field name: "file")' });

  let rows;
  try {
    rows = parseUploadedFile(req.file.buffer, req.file.originalname);
  } catch (err) {
    return res.status(400).json({ error: `Could not parse file: ${err.message}` });
  }
  if (!rows.length) return res.status(400).json({ error: 'File contains no rows' });

  const defaults = {
    board: req.body.board ? String(req.body.board).toLowerCase() : undefined,
    grade: req.body.grade ? String(req.body.grade) : undefined,
    chapterSlug: req.body.chapterSlug,
    chapterName: req.body.chapterName,
    section: req.body.section ? String(req.body.section).toLowerCase() : undefined,
    subtype: req.body.subtype ? String(req.body.subtype).toLowerCase() : undefined
  };

  const ops = [];
  const errors = [];

  rows.forEach((row, i) => {
    const merged = {
      board: (row.board || defaults.board || '').toLowerCase() || undefined,
      grade: row.grade || defaults.grade,
      chapterSlug: row.chapterSlug || defaults.chapterSlug,
      chapterName: row.chapterName || defaults.chapterName,
      section: (row.section || defaults.section || '').toLowerCase() || undefined,
      subtype: (row.subtype || defaults.subtype || '').toLowerCase() || undefined,
      question: row.question,
      options: row.options,
      answer: row.answer,
      explanation: row.explanation,
      marks: row.marks,
      assertion: row.assertion,
      reason: row.reason,
      order: row.order
    };

    const missing = missingFields(merged);
    if (missing.length) {
      errors.push({ row: i + 2, error: `Missing: ${missing.join(', ')}` }); // +2 ≈ header + 1-index
      return;
    }

    merged.updatedBy = req.user.id;
    merged.createdBy = req.user.id;

    // upsert on the natural key so re-uploading the same sheet updates instead of duplicating
    ops.push({
      updateOne: {
        filter: {
          board: merged.board,
          grade: merged.grade,
          chapterSlug: merged.chapterSlug,
          section: merged.section,
          subtype: merged.subtype,
          question: merged.question
        },
        update: { $set: merged },
        upsert: true
      }
    });
  });

  let result = { insertedCount: 0, modifiedCount: 0, upsertedCount: 0 };
  if (ops.length) {
    const bulkResult = await Question.bulkWrite(ops, { ordered: false });
    result = {
      matchedCount: bulkResult.matchedCount,
      modifiedCount: bulkResult.modifiedCount,
      upsertedCount: bulkResult.upsertedCount
    };
  }

  res.json({
    totalRows: rows.length,
    processed: ops.length,
    skipped: errors.length,
    errors,
    result
  });
});

module.exports = router;
