const mongoose = require('mongoose')
const Rescue = require('../models/rescue.model')
const {
    create
} = require('../models/rescue.model')
const Pet = require('../models/pet.model')
const User = require('../models/user.model')

mongoose.connect(`mongodb://localhost/petappdot`)


const rescues = [{
        rescueOtherId: '5f03709162b23c48a2407e05',
        name: "Perretes a GoGooo",
        description: 'waao',
        logo: '..',
        location: "allí"
    }

]

const pets = [{
    rescueId: '5f04a318d78952672545a72a',
    virtualChip: "...",
    typeAnimal: "reptile",
    race: '.',
    genre: "male",
    age: 22,
    dateBorn: '1991-01-21',
    description: "amazing reptil",
    Sterilized: true,
    GalleryImages: "...",

}, ]

const users = [{
    name: 'Alvaro',
    avatar: 'https://i.ytimg.com/vi/eqNLfy7aGMk/maxresdefault.jpg',
    phone: 444444447,
    username: 'Armando Adistancia',
    password: 321,
    role: "ADOPTER"
}, ]


Rescue.create(rescues)
    .then(allRescues => {
        console.log(`created ${allRescues.length} rescues`)
        mongoose.connection.close()
    })
    .catch(err => console.log('eroor en la BBD', err))


Pet.create(pets)
    .then(allPets => {
        console.log(`created ${allPets.length} pets`)
        mongoose.connection.close()
    })
    .catch(err => console.log('eroor en la BBD', err))


User.create(users)
    .then(allUsers => {
        console.log(`created ${allUsers.length} users`)
        mongoose.connection.close()
    })
    .catch(err => console.log('eroor en la BBD', err))





// create
// findOne
// Objectasign:id
// findAdopters
// saveAsociation
// foreach




//Promise.all(associations.map(association => Adopter.create(association.adopter)))
//.then(adopter => adopter.name)))
//.then(() => associations.map(association => Adopter.findOne({name: association.adopter.name})
//.then(adopter => Object.assign({}, association, {adopter: adopter._id}))))
//.then(findAdopters => Promise.all(findAdopters)
//.then(associations => associations.map(association => Association.create(association))))
//.then(savedAssociations => Promise.all(savedAssociations)
//.then(associations => associations.forEach(association => console.log(`Asociación ${association.name} creada`)))
//.then(() => mongoose.connection.close())
//.catch(error => console.log('Error: ', error))