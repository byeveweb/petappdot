const mongoose = require('mongoose')
const Rescue = require('../models/rescue.model')
const { create } = require('../models/rescue.model')
const Pet = require('../models/pet.model')
const User = require('../models/user.model')

const dbtitle = 'animal-adopt'
mongoose.connect(`mongodb://localhost/${dbtitle}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

Rescue.collection.drop()
Pet.collection.drop()
User.collection.drop()

const rescues = [
    {
        name: "Perretes a GoGooo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        email: "agcabrero3@gmail.com",
        password: "123",
        logo: true,
        location: "allí"
    }   
]

const pets = [
    {
        RescueId: "...",
        virtualChip: "...",
        type: "reptile",
        race: "..",
        genre: "male",
        age: 22,
        dateBorn: "....",
        description: "amazing reptil",
        Sterilized: "..",
        GalleryImages: "..."          
},
]

const users = [
    {
        name: 'Alvaro',
        avatar: 'https://i.ytimg.com/vi/eqNLfy7aGMk/maxresdefault.jpg',
        phone: 444444447,
        username: 'Armando Adistancia',
        password: 321,
        role: "ADOPTER"
    },
]


Rescue
    .create(rescues)
    .then(allRescues => {
    console.log(`created ${allRescues.length} rescues`)
    mongoose.connection.close()})
    .catch(err => console.log('eroor en la BBD', err))


Pet
    .create(pets)
    .then(allPets => {console.log(`created ${allPets.length} pets`)
    mongoose.connection.close()})
    .catch(err => console.log('eroor en la BBD', err))


User
    .create(users)
    .then(allUsers => {console.log(`created ${allUsers.length} users`)
    mongoose.connection.close() })
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

