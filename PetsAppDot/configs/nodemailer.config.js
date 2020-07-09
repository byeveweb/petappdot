const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'varito13.agc@gmail.com',
        pass: 'MIkeportnoy2018'
    }
})

module.exports = transporter