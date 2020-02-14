// modulController.js
// Import modul model
Modul = require('../models/Modul');
User = require('../models/User');

// Handle index actions
exports.index = async (req, res) => {
  const moduls = await Modul.find({});
  console.log(moduls);
  res.send(moduls);
};
// Handle create modul actions
exports.new = function (req, res) {
  var modul = new Modul({ ...req.body });
  console.log(modul);
  // save the modul and check for errors
  modul.save(function (err) {
    // Check for validation error
    if (err)
      res.json(err);
    else
      res.json({
        message: 'New modul created!',
        data: modul
      });
  });
};
exports.view = function (req, res) {
  Modul.findById(req.params.modul_id, function (err, modul) {
    if (err)
      res.send(err);
    res.json({
      message: 'Moduls details loading..',
      data: modul
    });
  });
};
// Handle view modul info
exports.viewUserModuls = function (req, res) {
  Modul.find({ teacher: req.params.user_id }, function (err, moduls) {
    if (err)
      res.send(err);
    res.json({
      message: 'Moduls details loading..',
      data: moduls
    });
  });
};
// Handle update modul info
exports.update = function (req, res) {
  Modul.findById(req.params.modul_id, function (err, modul) {
    if (err)
      res.send(err);
    //TODO update modul
    // save the modul and check for errors
    modul.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Modul Info updated',
        data: modul
      });
    });
  });
};
// Handle delete modul
exports.delete = function (req, res) {
  Modul.remove({
    _id: req.params.modul_id
  }, function (err, modul) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'Modul deleted'
    });
  });
};
