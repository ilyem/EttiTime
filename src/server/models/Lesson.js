
var mongoose = require('mongoose');

// Setup schema
var lessonSchema = mongoose.Schema({
  modul: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Modul'
  },
  type: {
    type: String,
    enum: ['study', 'exam'],
    required: true
  },
  nr: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  attachments: {
    type: {
      name: String,
      link: String
    }
  },
  info: {
    type: String
  }
});

var Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson
