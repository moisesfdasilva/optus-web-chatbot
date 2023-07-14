const express = require('express');
const { getAbc } = require('./controllers/userController');

const app = express();
app.use(express.json());
app.use('/user', getAbc);

module.exports = app;
