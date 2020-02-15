// eventController.js
// Import event model
Event = require('../models/Event');
User = require('../models/User');

// Handle index actions
exports.index = async (req, res) => {
  const events = await Event.find({});
  console.log(events);
  res.send(events);
};
// Handle create event actions
exports.new = function (req, res) {
  var event = new Event({ ...req.body });
  console.log(event);
  // save the event and check for errors
  event.save(function (err) {
    // Check for validation error
    if (err)
      res.json(err);
    else
      res.json({
        message: 'New event created!',
        data: event
      });
  });
};
exports.view = function (req, res) {
  Event.findById(req.params.event_id, function (err, event) {
    if (err)
      res.send(err);
    res.json({
      message: 'Events details loading..',
      data: event
    });
  });
};
// Handle view event info
exports.viewUserEvents = function (req, res) {
  Event.find({ teacher: req.params.user_id }, function (err, events) {
    if (err)
      res.send(err);
    res.json({
      message: 'Events details loading..',
      data: events
    });
  });
};
// Handle update event info
exports.update = function (req, res) {
  Event.findById(req.params.event_id, function (err, event) {
    if (err)
      res.send(err);
    //TODO update event
    // save the event and check for errors
    event.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Event Info updated',
        data: event
      });
    });
  });
};
// Handle delete event
exports.delete = function (req, res) {
  Event.remove({
    _id: req.params.event_id
  }, function (err, event) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'Event deleted'
    });
  });
};
