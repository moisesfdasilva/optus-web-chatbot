const chatService = require('../services/chatService');

const getAll = async (_req, res) => {
  const chatsList = await chatService.getAll();
  return res.status(200).json(chatsList);
};

const getMessagesByUserId = async (req, res) => {
  const { id } = req.params;
  const chatsList = await chatService.getMessagesByUserId(id);
  return res.status(200).json(chatsList);
};

const addChat = async (req, res) => {
  const { id } = req.params;
  const { messages } = req.body;
  const newChat = await chatService.addChat(id, messages);
  return res.status(201).json(newChat);
}

module.exports = { getAll, getMessagesByUserId, addChat };
