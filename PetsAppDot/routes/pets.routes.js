const express = require('express')
const router = express.Router()
const Pet = require('../models/adopter.model')
const Rescue = require('../models/rescue.model')


// Con respecto al tema de owner, la propiedad
// owner en cada item donde almacenar el ObjectId de su owner
// permite renderizar en una vista únicamente los items
// asociados al owner:

// Item.find({owner: req.user._id})
//     .then(itemsOwnedByUser => res.render('items-index', {itemsOwnedByUser})





//Muestra el listado de las mascotas inscritas --GET

router.get('/', (req, res, next) => {
    Pet.find()
        .populate('rescue') // nombre de la propiedad a popular del modelo actual
        .then(allPets => res.render('publics/list-animals', {allPets}))
        .catch(err => next(new Error(err)))
})

//Muestra ficha de la mascota consultada :id --GET

router.get('/:id', (req, res, next) => {
    Pet.findById(req.params.id)
        .populate('rescue')
        .then(thePet => res.render('publics/animal-details', {thePet}))
        .catch(err => next(new Error(err)))
})

//Guarda en la BBDD una asociación --POST

router.post('/signup-rescue', (req, res) => {

    const { name, description, email, password, logo, location } = req.body
    
    Rescue.create({ name, description, email, password, logo, location})
        .then(() => res.redirect('/'))
        .catch(err => next(new Error(err)))
})


//Inicia sesión en la BBDD una asociaciónn --POST
//authroutes 11 a 56 ¿?

//Envía un formulario de contacto -- POST
//rallao, preguntar a Eva

module.exports = router

