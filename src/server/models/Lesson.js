
var mongoose = require('mongoose');

// Setup schema
var lessonSchema = mongoose.Schema({
  modul: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Modul'
  },
  nr: {
    type: String,
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
  }
});

var Lesson = mongoose.model('lesson', lessonSchema);

module.exports = Lesson
