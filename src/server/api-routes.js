// api-routes.js
// Initialize express router
let router = require('express').Router();
const authenticate = require('./middleware/auth')

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import controllers
var userController = require('./controllers/userController');
var modulController = require('./controllers/modulController');
var timelineController = require('./controllers/timelineController');

// User routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);

router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

router.route('/users/:user_id/moduls')
    .get(modulController.viewUserModuls);

router.route('/users/login')
    .post(userController.login);

router.route('/users/logout')
    .post(authenticate, userController.logout);


//Module routes
router.route('/moduls')
    .get(modulController.index)
    .post(modulController.new);

router.route('/moduls/:modul_id')
    .get(modulController.view)
    .patch(modulController.update)
    .put(modulController.update)
    .delete(modulController.delete);

//Module routes
router.route('/timelines')
    .get(timelineController.index)
    .post(timelineController.new);

router.route('/timelines/:timeline_id')
    .get(timelineController.view)
    .patch(timelineController.update)
    .put(timelineController.update)
    .delete(timelineController.delete);

// Export API routes
module.exports = router;
