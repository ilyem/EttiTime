var mongoose = require('mongoose');
const User = require('./User');

const Teacher = User.discriminator('Teacher', mongoose.Schema({
  title: {
    type: string,
  },
})
)

var Teacher = mongoose.model('user', Teacher);
module.exports = Teacher
