const app = require('./app')

app.listen(5000, () => {
    console.log('app running on port 5000')
})

// for the tests to use this server
module.exports = app