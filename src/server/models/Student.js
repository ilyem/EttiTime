var mongoose = require('mongoose');
const User = require('./User');

const Student = User.discriminator('Student', mongoose.Schema({
  group: {
    type: String,
    required: true
  }
})
);

var Student = mongoose.model('user', Student);

module.exports = Student
