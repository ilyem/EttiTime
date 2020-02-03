var mongoose = require('mongoose');
const User = require('./User');

const Student = User.discriminator('Student', mongoose.Schema({
  class: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
})
);

var Student = mongoose.model('user', Student);

module.exports = Student
