const { User } = require('../models');

const getAll = async () => {
  const usersList = await User.findAll();
  return usersList;
};

const addUser = async ({ email, username, password }) => {
  const newUser = await User.create({ email, username, password });
  return newUser;
};

module.exports = { getAll, addUser };
