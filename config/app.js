
module.exports.mount = app => {
    const bodyParser = require('body-parser')
    const logger = require('morgan')
    
    // app wide middleware //
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    app.use(logger('dev'))
}