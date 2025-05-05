const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

console.log('authRoutes loaded');
router.post('/register', register);
router.post('/login', login);
router.get('/me', me);

module.exports = router;
