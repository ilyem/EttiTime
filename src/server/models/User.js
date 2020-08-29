// userModel.js
var mongoose = require('mongoose');
var utils = require('../utils');
var jwt = require('jsonwebtoken')
// var options = {discriminatorKey: 'type'};
// Setup schema
var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
  },
  // group: {
  //   type: String,
  //   required: function () { return this.type === "student" }
  // },
});


// }, options);


//Find user by email
userSchema.statics.findByCredentials = async (email, password) => {
  // Search for a user by email and password.
  const user = await User.findOne({ email });
  if (!user) {
    throw Error('Invalid login email')
  }
  const cryptPassword = utils.crypt(password);
  if (cryptPassword !== user.password) {
    throw Error('Invalid login password')
  }
  return user
}

userSchema.methods.generateAuthToken = async function () {
  // Generate an auth token for the user
  const user = this
  const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY)
  user.token = token;
  await user.save()
  return token
}

//hashing the password
userSchema.pre('save', function (next) {
  let user = this;
  if (user.isModified('password')) {
    user.password = utils.crypt(user.password);
  }
  next();
});
// Export User model
var User = mongoose.model('User', userSchema);

module.exports = User
