const express = require('express');
const { getAll, addUser, login, verifyUserToken } = require('../controllers/userController');

const router = express.Router();

router.get('/all', getAll);
router.post('/new', addUser);
router.post('/login', login);
router.get('/verify', verifyUserToken);

module.exports = router;
