module.exports = app => {

    // Role checker middleware
    const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.redirect('/login')


    // Base URLS
    app.use('/', require('./index.routes'))
    app.use('/', require('./auth.routes'))
    app.use('/', require('./roles.routes'))
    app.use('/asociacion', checkRole(['ASSOCIATIONS', 'ADMIN']), require('./assprivatearea.routes'))
    app.use('/guest', checkRole(['GUEST', 'ADMIN']), require('./guestprivatearea.routes'))
}