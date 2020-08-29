
var mongoose = require('mongoose');

// Setup schema
var subjectSchema = mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  },
  groups: {
    type: [String]
  }
});

var Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject
