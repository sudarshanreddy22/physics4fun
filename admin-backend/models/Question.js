const mongoose = require('mongoose');

/*
  One flexible document type covers every question-based section:
  Descriptive (2marks / 3marks / case), Objective (mcq / tof / fib / match),
  and PYQs (mcq / ar / 2 / 3 / 4 / 5).

  board        e.g. 'cbse' | 'ap-state' | 'ap-inter' | 'cisce' | 'iit-foundation' | 'others'
  grade        e.g. '6'..'12' (string, matches your gradeN folder naming)
  chapterSlug  matches the chapter folder slug used on the site
  section      'descriptive' | 'objective' | 'pyq'  (extend as needed)
  subtype      '2marks' | '3marks' | 'case' | 'mcq' | 'tof' | 'fib' | 'match' | 'ar' | '2' | '3' | '4' | '5'
  extra        free-form bag for anything section-specific (e.g. notes/flashcards later)
*/
const optionSchema = new mongoose.Schema(
  { key: String, text: String },
  { _id: false }
);

const questionSchema = new mongoose.Schema(
  {
    board: { type: String, required: true, trim: true, lowercase: true },
    grade: { type: String, required: true, trim: true },
    chapterSlug: { type: String, required: true, trim: true },
    chapterName: { type: String, trim: true },
    section: { type: String, required: true, trim: true, lowercase: true },
    subtype: { type: String, required: true, trim: true, lowercase: true },

    question: { type: String, required: true },
    options: [optionSchema],
    answer: { type: String },
    explanation: { type: String },
    marks: { type: Number },
    assertion: { type: String },
    reason: { type: String },

    order: { type: Number, default: 0 },
    extra: { type: mongoose.Schema.Types.Mixed },

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

questionSchema.index({ board: 1, grade: 1, chapterSlug: 1, section: 1, subtype: 1 });

module.exports = mongoose.model('Question', questionSchema);
