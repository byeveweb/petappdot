const express = require('express')
const router = express.Router()
const Pet = require('../models/adopter.model')
const Association = require('../models/association.model')

//Muestra el listado de las mascotas inscritas --GET

router.get('/', (req, res, next) => {
    Pet.find()
        .populate('association') // nombre de la propiedad a popular del modelo actual
        .then(allPets => res.render('publics/list-animals', {allPets}))
        .catch(err => next(new Error(err)))
})

//Muestra ficha de la mascota consultada :id --GET

router.get('/:id', (req, res, next) => {
    Pet.findById(req.params.id)
        .populate('association')
        .then(thePet => res.render('publics/animal-details', {thePet}))
        .catch(err => next(new Error(err)))
})

//Guarda en la BBDD una asociación --POST

router.post('/signup-associations', (req, res) => {

    const { name, description, email, password, logo, owner } = req.body
    
    Association.create({ name, description, email, password, logo, owner})
        .then(() => res.redirect('/'))
        .catch(err => next(new Error(err)))
})


//Inicia sesión en la BBDD una asociaciónn --POST
//authroutes 11 a 56 ¿?

//Envía un formulario de contacto -- POST
//rallao, preguntar a Eva

module.exports = router

