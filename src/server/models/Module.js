
var mongoose = require('mongoose');

// Setup schema
var moduleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Course', 'Seminar', 'Laboratory', 'Project'],
    required: true
  },
  startDate: {
    type: Date,
    required: true

  },
  endDate: {
    type: Date,
    required: true
  },
  teacher: {
    type: String,
    required: true
  },
  lessons: {
    type: [String],
    required: true
  },
  years: {
    type: [Number],
    required: true
  },
  classes: {
    type: [String]
  },
  groups: {
    type: [String]
  }
});

var Module = mongoose.model('module', moduleSchema);

module.exports = Module
