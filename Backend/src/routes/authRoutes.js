// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
// Route for user exists check
router.post('/checkuserexists', authController.checkuserexists);

// Route for user signup
router.post('/signup', authController.signup);

// Route for user login
router.post('/login', authController.login);

// Route for password reset
router.post('/forgot-password', authController.resetPassword)

//router.post('/post_signup', authController.post_signup);
//router.post('/post_login', authController.post_login);
module.exports = router; //  sure to export the router
