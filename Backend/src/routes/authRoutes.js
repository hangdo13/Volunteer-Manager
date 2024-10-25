// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// Route for user signup
router.post('/signup', authController.signup);

// Route for user login
router.post('/login', authController.login);

// Route for password reset
router.post('/forgot-password', authController.resetPassword)

module.exports = router; //  sure to export the router
