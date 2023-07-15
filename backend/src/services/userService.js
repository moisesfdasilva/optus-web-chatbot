const { User } = require('../models');
const { tokenEncode, tokenDecode } = require('../utils/jwt');

const getAll = async () => {
  const usersList = await User.findAll();
  return usersList;
};

const addUser = async ({ email, username, password }) => {
  const newUser = await User.create({ email, username, password });
  return newUser;
};

const login = async ({ username, hashPass }) => {
  const user = await User.findOne({
    where: { username, password: hashPass },
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return { message: 'Incorrect username or password.' };
  }

  const token = tokenEncode(user.dataValues);
  return { user, token };
};

const verifyUserToken = (token) => {
  try {
    return tokenDecode(token);
  } catch (error) {
    return { message: 'Token failure.' };
  }
};

module.exports = { getAll, addUser, login, verifyUserToken };
