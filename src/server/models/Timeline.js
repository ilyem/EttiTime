// timelineModel.js
var mongoose = require('mongoose');
var utils = require('../utils');
var jwt = require('jsonwebtoken')
// var options = {discriminatorKey: 'type'};
// Setup schema
var timelineSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ['exams', 'courses', 'vacation'],
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});


// }, options);


// Export Timeline model
var Timeline = mongoose.model('timeline', timelineSchema);

module.exports = Timeline
