const promise = require('bluebird')
const options = {
    promiseLib: promise
}
const pgp = require('pg-promise')(options)

module.exports = pgp('postgres://postgres:admin@localhost:5432/passport_local_knex')