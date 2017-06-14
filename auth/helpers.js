const db = require('../database')
const bcrypt = require('bcryptjs')

function createClient (req) {
  const username = req.body.username
  const password = req.body.password

  let client = {
    username,
    password: hashPassword(password)
  }

  return db
    .one('INSERT INTO users(username, password) VALUES(${username}, ${password}) returning *'
      , client)
}

function hashPassword (password) {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

module.exports = {
  createClient
}