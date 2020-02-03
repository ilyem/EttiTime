// api-routes.js
// Initialize express router
let router = require('express').Router();
const authenticate  = require('./middleware/auth')

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import user controller
var userController = require('./controlles/userController');
// User routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);

router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

router.route('/users/login')
    .post(userController.login);

    router.route('/users/logout')
    .post(authenticate, userController.logout);

// Export API routes
module.exports = router;