const express = require('express');
const { register, login, getProfile, logout } = require('../controllers/authController');
const auth = require('../middleware/auth');

const router = express.Router();

// Rutas públicas
router.post('/register', register);
router.post('/login', login);

// Rutas protegidas
router.get('/profile', auth, getProfile);
router.post('/logout', auth, logout);

module.exports = router;