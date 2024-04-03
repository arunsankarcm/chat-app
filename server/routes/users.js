const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/userController');


router.post('/signup', user_controller.signUp);
router.post('/login', user_controller.userLogin);
router.get('/get-users', user_controller.getUsers)

1
module.exports = router;

