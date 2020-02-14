// timelineController.js
// Import timeline model
Timeline = require('../models/Timeline');
// Handle index actions
exports.index = async (req, res) => {
    const timelines = await Timeline.find({});
    console.log(timelines);
    res.send(timelines);
};
// Handle create timeline actions
exports.new = function (req, res) {
    var timeline = new Timeline({ ...req.body });
    console.log(timeline);
    // save the timeline and check for errors
    timeline.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New timeline created!',
                data: timeline
            });
    });
};
// Handle view timeline info
exports.view = function (req, res) {
    Timeline.findById(req.params.timeline_id, function (err, timeline) {
        if (err)
            res.send(err);
        res.json({
            message: 'Timeline details loading..',
            data: timeline
        });
    });
};
// Handle update timeline info
exports.update = function (req, res) {
    Timeline.findById(req.params.timeline_id, function (err, timeline) {
        if (err)
            res.send(err);
        timeline.name = req.body.name ? req.body.name : timeline.name;
        timeline.gender = req.body.gender;
        timeline.email = req.body.email;
        timeline.phone = req.body.phone;
        // save the timeline and check for errors
        timeline.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Timeline Info updated',
                data: timeline
            });
        });
    });
};
// Handle delete timeline
exports.delete = function (req, res) {
    Timeline.remove({
        _id: req.params.timeline_id
    }, function (err, timeline) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Timeline deleted'
        });
    });
};
