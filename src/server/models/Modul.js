
var mongoose = require('mongoose');

// Setup schema
var modulSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['course', 'seminar', 'laboratory', 'project'],
    required: true
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  lessons: {
    type:  mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  },
  groups: {
    type: [String]
  }
});

var Modul = mongoose.model('modul', modulSchema);

module.exports = Modul
