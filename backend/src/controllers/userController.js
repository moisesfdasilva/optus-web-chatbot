const userService = require('../services/userService');

const getAll = async (_req, res) => {
  const usuario = await userService.getAll();
  return res.status(200).json(usuario);
};

module.exports = { getAll };
