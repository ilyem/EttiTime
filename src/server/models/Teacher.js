var mongoose = require('mongoose');
const User = require('./User');

const Teacher = User.discriminator('Teacher', mongoose.Schema({
  modules: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Module'
  },
})
)

var Teacher = mongoose.model('user', Teacher);

module.exports = Teacher
