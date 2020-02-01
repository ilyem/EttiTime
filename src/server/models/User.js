// userModel.js
var mongoose = require('mongoose');
var utils = require('../utils');
const jwt = require('jsonwebtoken')

// Setup schema
var userSchema = mongoose.Schema({
  name: {
    type: String,
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
  gender: String,
  phone: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});


//Find user by email
userSchema.statics.findByCredentials = async (email, password) => {
  // Search for a user by email and password.
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    throw Error('Invalid login credentials')
  }
  const cryptPassword = utils.crypt(password);
  console.log(cryptPassword);
  if ( cryptPassword !== user.password) {
    throw Error('Invalid login credentials' )
  }
  return user
}

userSchema.methods.generateAuthToken = async function() {
  // Generate an auth token for the user
  const user = this
  const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
  await user.save()
  return token
}

//hashing the password
userSchema.pre('save', function (next) {
  let user = this;
  if(user.isModified('password')){
  user.password = utils.crypt(user.password);
  }
  next();
});
// Export User model
var User = mongoose.model('user', userSchema);

module.exports = User
