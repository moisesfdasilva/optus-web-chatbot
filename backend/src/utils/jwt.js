require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || "pass";

function tokenDecode(token) {
  const decoded = jwt.verify(token, secret);
  const { id, email, username } = decoded;
  return { id, email, username };
}

function tokenEncode(payload) {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
}

module.exports = { tokenDecode, tokenEncode };
