const { User } = require('../models');

const getAll = async () => {
  const usersList = await User.findAll();
  return usersList;
};

module.exports = { getAll };
