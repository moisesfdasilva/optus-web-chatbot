const md5 = require('md5');
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

const login = async (req, res) => {
  const { username, password } = req.body;
  const hashPass = md5(password);

  const response = await userService.login({ username, hashPass });
  console.log(response);
  if (response.message) {
    return res.status(401).json({ message: response.message });
  }

  return res.status(200).json(response);
};

module.exports = { getAll, addUser, login };
