const chatService = require('../services/userService');

const getAll = async (_req, res) => {
  const users = await chatService.getAll();
  return res.status(200).json(users);
};

module.exports = { getAll };
