// timelineModel.js
var mongoose = require('mongoose');
var utils = require('../utils');
var jwt = require('jsonwebtoken')
// var options = {discriminatorKey: 'type'};
// Setup schema
var timelineSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ['exams', 'courses','vacation'],
        required: true
      },
  startDate: {
    type:Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

    
// }, options);


//Find timeline by email
timelineSchema.statics.findByCredentials = async (email, password) => {
  // Search for a timeline by email and password.
  const timeline = await Timeline.findOne({ email });
  if (!timeline) {
    throw Error('Invalid login credentials')
  }
  const cryptPassword = utils.crypt(password);
  if ( cryptPassword !== timeline.password) {
    throw Error('Invalid login credentials' )
  }
  return timeline
}

timelineSchema.methods.generateAuthToken = async function() {
  // Generate an auth token for the timeline
  const timeline = this
  const token = jwt.sign({_id: timeline._id}, process.env.JWT_KEY)
  timeline.token = token;
  await timeline.save()
  return token
}

//hashing the password
timelineSchema.pre('save', function (next) {
  let timeline = this;
  if(timeline.isModified('password')){
  timeline.password = utils.crypt(timeline.password);
  }
  next();
});
// Export Timeline model
var Timeline = mongoose.model('timeline', timelineSchema);

module.exports = Timeline
