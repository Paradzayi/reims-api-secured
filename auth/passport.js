const passport = require('passport')
const db = require('../database')

module.export = function () {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    db.one('SELECT * FROM users WHERE id = ${id}', { id })
      .then(client => {
        done(null, client)
      })
      .catch(err => {
        done(err, null)
      })
  })
}