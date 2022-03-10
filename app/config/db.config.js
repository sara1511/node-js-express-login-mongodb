require('dotenv').config()
module.exports = {
  HOST: process.env.MONGODB_URL,
  DB: process.env.MONGODB_NAME
};