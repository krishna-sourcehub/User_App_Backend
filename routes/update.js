const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const signin=require('../controllers/signin');
// Define a route for updating user data
router.put('/:userId', UserController.updateUser);


module.exports = router;
