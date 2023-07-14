const express = require('express');
const { getAll } = require('./controllers/userController');

const app = express();
app.use(express.json());
app.use('/user/all', getAll);

module.exports = app;
