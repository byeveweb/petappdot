const mongoose = require('mongoose')
const Association = require('../models/association.model')
const Adopter = require('../models/adopter.model')
const { create } = require('../models/association.model')
const Pet = require('../models/pet.model')
const User = require('../models/user.model')

const dbtitle = 'animal-adopt'
mongoose.connect(`mongodb://localhost/${dbtitle}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

Association.collection.drop()
Adopter.collection.drop()
Pet.collection.drop()
User.collection.drop()

const associations = [
    {
        name: "Perretes a GoGooo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        email: "agcabrero3@gmail.com",
        password: "123",
        logo: true,
    }   
]


const adopters = [
    {
        AssociationId: "",
        virtualChip: true,
        TypeAnimal: "Dog",
        Race: "labrador",
        Genre: "male",
        Age: "14",
        DateBorn: 91/04/24,
        Description: "Fantasctic dog, with fantastic atributes",
        Sterilized: true,
        GalleryImages:"",
     }

]

const pets = [
    {
        name: 'triskis',
        description: 'A fabulous cat',
        adopted: false,
        type: 'mammal',
                  
    },
    {
        name: 'chusplas',
        description: 'A dangerous animal',
        adopted: true,
        type: 'reptile',

    }
]

const users = [
    {
        name: 'Alvaro',
        avatar: 'https://i.ytimg.com/vi/eqNLfy7aGMk/maxresdefault.jpg',
        phone: 444444447,
        username: 'Armando Adistancia',
        password: 321,
        role: "GUEST"
    },

    {
        name: 'olavera',
        avatar: 'https://3.bp.blogspot.com/-42ge4BV_I1Y/TbyeLDcEf_I/AAAAAAAABoQ/J0bIg0EnW8c/s1600/FRASE+ayrton-senna.jpg',
        phone: 64537893,
        username: 'Bruuuummm',
        password: 123,
        role: "association"
    }
]


Association
    .create(associations)
    .then(allAssociations => {
    console.log(`created ${allAssociations.length} associations`)
    mongoose.connection.close()})
    .catch(err => console.log('eroor en la BBD', err))


Adopter
    .create(adopters)
    .then(allAdopters => {
    console.log(`created ${allAdopters.length} adopters`)
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

