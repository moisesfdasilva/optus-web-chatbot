const { User } = require('../models');
const { tokenEncode, tokenDecode } = require('../utils/jwt');

const addUser = async ({ email, username, hashPass }) => {
  const newUser = await User.create({ email, username, password: hashPass });
  return {
    id: newUser.id,
    email: newUser.email,
    username: newUser.username,
  };
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

module.exports = { addUser, login, verifyUserToken };
