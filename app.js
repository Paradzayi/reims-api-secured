const express = require('express')
const app = express()

const appConfig = require('./config/app')
const routeConfig = require('./config/routes')

appConfig.mount(app)
routeConfig.mount(app)

module.exports = app