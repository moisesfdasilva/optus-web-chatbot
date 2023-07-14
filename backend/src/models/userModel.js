const getAbc = async (_req, res) => {
  const usuario = { usuario: 'USUÁRIO' };
  return res.status(200).json(usuario);
};

module.exports = { getAbc };
