const userService = require('../services/userService');

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

const addUser = async (req, res) => {
  const { email, username, password } = req.body;
  const newUser = await userService.addUser({ email, username, password });
  return res.status(201).json(newUser);
};

module.exports = { getAll, addUser };
