// subjectController.js
// Import subject model
Subject = require('../models/Subject');
User = require('../models/User');

// Handle index actions
exports.index = async (req, res) => {
  const subjects = await Subject.find({});
  console.log(subjects);
  res.send(subjects);
};
// Handle create subject actions
exports.new = function (req, res) {
  var subject = new Subject({ ...req.body });
  console.log(subject);
  // save the subject and check for errors
  subject.save(function (err) {
    // Check for validation error
    if (err)
      res.json(err);
    else
      res.json({
        message: 'New subject created!',
        data: subject
      });
  });
};
exports.view = function (req, res) {
  Subject.findById(req.params.subject_id, function (err, subject) {
    if (err)
      res.send(err);
    res.json({
      message: 'Subjects details loading..',
      data: subject
    });
  });
};
// Handle view subject info
exports.viewUserSubjects = function (req, res) {
  Subject.find({ teacher: req.params.user_id }, '-_id -__v')
    .populate("teacher", "name  -_id")
    .exec(function (err, subjects) {
      if (err)
        res.send(err);
      res.json({
        message: 'Subjects details loading..',
        data: subjects
      });
    });
};
// Handle update subject info
exports.update = function (req, res) {
  Subject.findById(req.params.subject_id, function (err, subject) {
    if (err)
      res.send(err);
    //TODO update subject
    // save the subject and check for errors
    subject.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Subject Info updated',
        data: subject
      });
    });
  });
};
// Handle delete subject
exports.delete = function (req, res) {
  Subject.remove({
    _id: req.params.subject_id
  }, function (err, subject) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'Subject deleted'
    });
  });
};
