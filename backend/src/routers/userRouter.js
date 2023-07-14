const express = require('express');
const { getAll, addUser } = require('../controllers/userController');

const router = express.Router();

router.get('/all', getAll);
router.post('/new', addUser);

module.exports = router;
