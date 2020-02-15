// lessonController.js
// Import lesson model
Lesson = require('../models/Lesson');
User = require('../models/User');

// Handle index actions
exports.index = async (req, res) => {
    const lessons = await Lesson.find({});
    console.log(lessons);
    res.send(lessons);
};
// Handle create lesson actions
exports.new = function (req, res) {
    var lesson = new Lesson({ ...req.body });
    console.log(lesson);
    // save the lesson and check for errors
    lesson.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New lesson created!',
                data: lesson
            });
    });
};
exports.view = function (req, res) {
    Lesson.findById(req.params.lesson_id, function (err, lesson) {
        if (err)
            res.send(err);
        res.json({
            message: 'Lessons details loading..',
            data: lesson
        });
    });
};
// Handle view lesson info
exports.viewUserLessons = function (req, res) {
    Lesson.find({ teacher: req.params.user_id }, function (err, lessons) {
        if (err)
            res.send(err);
        res.json({
            message: 'Lessons details loading..',
            data: lessons
        });
    });
};
// Handle update lesson info
exports.update = function (req, res) {
    Lesson.findById(req.params.lesson_id, function (err, lesson) {
        if (err)
            res.send(err);
        //TODO update lesson
        // save the lesson and check for errors
        lesson.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Lesson Info updated',
                data: lesson
            });
        });
    });
};
// Handle delete lesson
exports.delete = function (req, res) {
    Lesson.remove({
        _id: req.params.lesson_id
    }, function (err, lesson) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Lesson deleted'
        });
    });
};
