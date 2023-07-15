const express = require('express');
const userRouter = require('./routers/userRouter');
const chatRouter = require('./routers/chatRouter');

const app = express();
app.use(express.json());
app.use('/user', userRouter);
app.use('/chat', chatRouter);

module.exports = app;
