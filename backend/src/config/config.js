require('dotenv').config();

const config = {
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'pass',
  database: process.env.MYSQLDATABASE || 'optus_web',
  host: process.env.MYSQLHOST || 'localhost',
  port: process.env.MYSQLPORT || '3306',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
}
