const express = require('express');
const { getMessagesByUserId, addChat } = require('../controllers/chatController');

const router = express.Router();

router.get('/user/:id/all', getMessagesByUserId);
router.post('/new/:id', addChat);

module.exports = router;
