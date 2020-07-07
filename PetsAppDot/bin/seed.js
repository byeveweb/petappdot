const mongoose = require('mongoose');

const Guest = require('../models/guest.model');
const User = require('../models/user.model');

mongoose.connect('mongodb://localhost/petappdot')


const guest = [{
        name: 'user_1',
        email: 'rescue',
        phone: 23232323,
        user_id: [
            "5f02f7e3cae80d63bf545922"
        ]

    },
    {
        name: 'user_2',
        email: 'guest',
        phone: 23232323,
        role: 'rescue',
        user_id: ["5f0311a08236ff091baea226"
        ]
    }, {
        name: 'user_2',
        email: 'guest',
        phone: 23232323,
        role: 'rescue',
        user_id: [
           "5f0311b48236ff091baea227"
        ]
    }
]

Guest
    .create(guest)
    .then(allTheguest => {
        console.log(`guest created: ${allTheguest}`)
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error ocurred: ${err}`))