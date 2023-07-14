const userService = require('../services/userService');

const getAbc = async (_req, res) => {
  const usuario = await userService.getAbc();
  return res.status(200).json(usuario);
};

module.exports = { getAbc };
