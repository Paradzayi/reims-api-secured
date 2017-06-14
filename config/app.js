
module.exports.mount = app => {
    const bodyParser = require('body-parser')
    const logger = require('morgan')
    const cookieParser = require('cookie-parser')
    const expressSession = require('express-session')

    // app wide middleware //
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    app.use(logger('dev'))
    app.use(cookieParser())
    app.use(expressSession({ secret: process.env.EXPRESS_SESSION_SECRET}))
    app.use(pasport.session())
}