// api-routes.js
// Initialize express router
let router = require('express').Router();
const authenticate = require('./middleware/auth')

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is Working',
        message: 'API is Working',
    });
});
// Import controllers
var userController = require('./controllers/userController');
var subjectController = require('./controllers/subjectController');
var timelineController = require('./controllers/timelineController');
var eventController = require('./controllers/eventController');
var lessonController = require('./controllers/lessonController');


// User routes
// router.route('/users')
//     .get(userController.index)
//     .post(userController.new);

// router.route('/users/:user_id')
//     .get(userController.view)
//     .patch(userController.update)
//     .put(userController.update)
//     .delete(userController.delete);

router.route('/users/:user_id/moduls')
    .get(subjectController.viewUserSubjects);

router.route('/users/login')
    .post(userController.login);

router.route('/users/logout')
    .post(authenticate, userController.logout);


//Modul routes
router.route('/subjects')
    .get(authenticate, subjectController.index)
    .post(authenticate, subjectController.new);

router.route('/subjects/:subject_id')
    .get(subjectController.view)
    .put(subjectController.update)
    .delete(subjectController.delete);

//Module routes
router.route('/timelines')
    .get(timelineController.index)
    .post(timelineController.new);

router.route('/timelines/:timeline_id')
    .get(timelineController.view)
    .patch(timelineController.update)
    .put(timelineController.update)
    .delete(timelineController.delete);

//Module routes
router.route('/events')
    .get(eventController.index)
    .post(eventController.new);

router.route('/events/:event_id')
    .get(eventController.view)
    .patch(eventController.update)
    .put(eventController.update)
    .delete(eventController.delete);

//Module routes
router.route('/lessons')
    .get(lessonController.index)
    .post(lessonController.new);

router.route('/lessons/:lesson_id')
    .get(lessonController.view)
    .patch(lessonController.update)
    .put(lessonController.update)
    .delete(lessonController.delete);
// Export API routes
module.exports = router;
