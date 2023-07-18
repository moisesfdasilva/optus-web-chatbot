const express = require('express');
const { addUser, login, verifyUserToken } = require('../controllers/userController');

const router = express.Router();

router.post('/new', addUser);
router.post('/login', login);
router.get('/verify', verifyUserToken);

module.exports = router;
