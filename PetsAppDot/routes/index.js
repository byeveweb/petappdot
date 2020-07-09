module.exports = app => {

    // Role checker middleware
    const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.redirect('/login')


    // Base URLS
    app.use('/', require('./index.routes'))
    app.use('/', require('./auth.routes'))
    app.use('/', require('./roles.routes'))
    app.use('/', require('./basic.routes'))
    app.use('/rescue', checkRole(['RESCUE', 'ADMIN']), require('./rescueprivatearea.routes'))
    app.use('/adopter', checkRole(['ADOPTER', 'ADMIN']), require('./adopterprivatearea.routes'))
    //mailer
    app.use('/', require('./index.routes'))
    app.use('/email', require('./basic.routes'))


// ESTO ES MULTER  app.use('/files', require('./upload.routes)) 
    

 
    

}