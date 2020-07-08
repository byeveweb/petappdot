// const express = require('express')
// const router = express.Router()
// const Pet = require('../models/adopter.model')//añadida aqui tambien
// const Rescue = require('../models/rescue.model')

// //Muestra el listado de asociaciones/rescue inscritas

// router.get('/', (req, res, next) => {
//     Rescue.find()
//         //.populate('Pet')
//         .then(allRescues => res.render('publics/list-rescue', {allRescues}))
//         .catch(err => next(new Error(err)))
// })

// //Ficha de la asociación/rescue consultada :id

// router.get('/:id', (req, res, next) => {
//     Rescue.findById(req.params.id)
//         .populate('Pet')
//         .then(theRescue => res.render('publics/rescue-details', {theRescue}))
//         .catch(err => next(new Error(err)))
// })

// //Listado de los animales publicados

// router.get('/', (req, res, next) => {
//     Pet.find()
//         .populate('rescue')
//         .then(allPets => res.render('publics/list-animals', {allPets}))
//         .catch(err => next(new Error(err)))
// })

// module.exports = router