const router = require('express').Router()
const authHelpers = require('../../auth/helpers')

router.post('/register', (req, res, next) => {
  authHelpers.createClient(req)
    .then(client => handleResponse(res, 200, { status: 'success', client} ))
    .catch(err => handleResponse(res, 500, { status: 'error', err}))
})

function handleResponse (res, code, body) {
    res.status(code).json(body)
}

module.exports = router