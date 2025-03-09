const express = require('express');
const { registerUser } = require('../controller/authController');

const router = express.Router();

router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.post('/logout', logoutUser);

module.exports = router;
