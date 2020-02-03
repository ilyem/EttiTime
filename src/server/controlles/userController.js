// userController.js
// Import user model
User = require('../models/User');
// Handle index actions
exports.index = function (req, res) {
  User.get(function (err, users) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Users retrieved successfully",
      data: users
    });
  });
};
// Handle create user actions
exports.new = function (req, res) {
  var user = new User();
  user.name = req.body.name ? req.body.name : user.name;
  user.password = req.body.password;
  user.gender = req.body.gender;
  user.email = req.body.email;
  user.phone = req.body.phone;
  // save the user and check for errors
  user.save(function (err) {
    // Check for validation error
    if (err)
      res.json(err);
    else
      res.json({
        message: 'New user created!',
        data: user
      });
  });
};
// Handle view user info
exports.view = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err)
      res.send(err);
    res.json({
      message: 'User details loading..',
      data: user
    });
  });
};
// Handle update user info
exports.update = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err)
      res.send(err);
    user.name = req.body.name ? req.body.name : user.name;
    user.gender = req.body.gender;
    user.email = req.body.email;
    user.phone = req.body.phone;
    // save the user and check for errors
    user.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'User Info updated',
        data: user
      });
    });
  });
};
// Handle delete user
exports.delete = function (req, res) {
  User.remove({
    _id: req.params.user_id
  }, function (err, user) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'User deleted'
    });
  });
};
 //Login a registered user
exports.login = async (req, res) => {
  try {
      const { email, password } = req.body
      const user = await User.findByCredentials(email, password)
      if (!user) {
          return res.status(401).send({error: 'Login failed! Check authentication credentials'})
      }
      const token = await user.generateAuthToken()
      res.send({ user, token })
  } catch (error) {
      res.status(400).send(error.message)
  }

};
//Logout a registered user
exports.logout = async (req, res) => {
  try {
      req.user.token = undefined
      await req.user.save()
      res.send("Successful logout!")
  } catch (error) {
      res.status(500).send()
  }
};
