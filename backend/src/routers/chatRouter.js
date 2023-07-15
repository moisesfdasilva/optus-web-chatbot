const express = require('express');
const { getAll, getMessagesByUserId, addChat } = require('../controllers/chatController');

const router = express.Router();

router.get('/all', getAll);
router.get('/user/:id/all', getMessagesByUserId);
router.post('/new/:id', addChat);

module.exports = router;
