const XLSX = require('xlsx');

/*
  Turns an uploaded file buffer into a plain array of row objects.
  Supports: .xlsx / .xls / .csv (via SheetJS) and .json (array of objects).

  Recognised columns (case-insensitive, extras are ignored):
  board, grade, chapterSlug, chapterName, section, subtype (or "type"),
  question, optionA, optionB, optionC, optionD, answer, explanation,
  marks, assertion, reason, order
*/
function parseUploadedFile(buffer, originalName) {
  const lower = (originalName || '').toLowerCase();

  if (lower.endsWith('.json')) {
    const text = buffer.toString('utf8');
    const data = JSON.parse(text);
    if (!Array.isArray(data)) throw new Error('JSON file must contain an array of question objects');
    return data.map(normalizeRow);
  }

  // xlsx / xls / csv all handled by SheetJS
  const wb = XLSX.read(buffer, { type: 'buffer' });
  const sheetName = wb.SheetNames[0];
  const sheet = wb.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });
  return rows.map(normalizeRow);
}

function normalizeRow(raw) {
  // build a case-insensitive lookup of the raw row's keys
  const lc = {};
  Object.keys(raw || {}).forEach(k => { lc[k.trim().toLowerCase()] = raw[k]; });

  const get = (...keys) => {
    for (const k of keys) {
      if (lc[k] !== undefined && lc[k] !== '') return lc[k];
    }
    return undefined;
  };

  const options = [];
  ['optiona', 'optionb', 'optionc', 'optiond'].forEach((k, i) => {
    const val = get(k, ['a', 'b', 'c', 'd'][i]);
    if (val !== undefined) options.push({ key: ['A', 'B', 'C', 'D'][i], text: String(val) });
  });

  const marksRaw = get('marks');

  return {
    board: get('board'),
    grade: get('grade') !== undefined ? String(get('grade')) : undefined,
    chapterSlug: get('chapterslug', 'slug'),
    chapterName: get('chaptername', 'chapter'),
    section: get('section'),
    subtype: get('subtype', 'type'),
    question: get('question'),
    options: options.length ? options : undefined,
    answer: get('answer'),
    explanation: get('explanation'),
    marks: marksRaw !== undefined ? Number(marksRaw) : undefined,
    assertion: get('assertion'),
    reason: get('reason'),
    order: get('order') !== undefined ? Number(get('order')) : undefined
  };
}

module.exports = { parseUploadedFile };
