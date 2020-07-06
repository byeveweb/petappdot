const express = require('express')
const router = express.Router()
const Pet = require('../models/adopter.model')//añadida aqui tambien
const Association = require('../models/association.model')

//Muestra el listado de asociaciones inscritas

router.get('/', (req, res, next) => {
    Association.find()
        //.populate('Pet')
        .then(allAssociations => res.render('publics/list-associations', {allAssociations}))
        .catch(err => next(new Error(err)))
})

//Ficha de la asociación consultada :id

router.get('/:id', (req, res, next) => {
    Association.findById(req.params.id)
        .populate('Pet')
        .then(theAssociation => res.render('publics/association-details', {theAssociation}))
        .catch(err => next(new Error(err)))
})

//Listado de los animales publicados

router.get('/', (req, res, next) => {
    Pet.find()
        .populate('association')
        .then(allPets => res.render('publics/list-animals', {allPets}))
        .catch(err => next(new Error(err)))
})

module.exports = router
