const express = require('express');
const { getAll, addUser, login } = require('../controllers/userController');

const router = express.Router();

router.get('/all', getAll);
router.post('/new', addUser);
router.post('/login', login);

module.exports = router;
