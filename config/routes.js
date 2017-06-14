

module.exports.mount = app => {
    const authRoutes = require('../routes/auth')
    
    
    app.use('/auth', authRoutes)
    
    // placeholder //
    app.get('/', (req, res) => {
        res.send('Hello world')
    })
}