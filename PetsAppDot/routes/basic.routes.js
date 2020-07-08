const express = require("express");
const router = express.Router();


const User = require("../models/user.model");
const Pet = require("../models/pet.model");
const Rescue = require("../models/rescue.model");

//router.get('/list-rescue', (req, res) => res.render('basicRoutes/list-rescue'))
//router.get('/list-pets', (req, res) => res.render('basicRoutes/list-pets'))



//URL > list-pets/ pet => renderizará la vista de basicRoutes/pet-detail.hbs
router.get('/list-pets/pet', (req, res) => res.render('basicRoutes/pet-detail'))

//URL > list-rescue/ rescue => renderizará la vista de basicRoutes/rescue-detail.hbs
router.get('/list-rescue/rescue', (req, res) => res.render('basicRoutes/rescue-detail'))

//URL -> list-pets=> renderizará la vista de basicRoutes/list-pets.hbs (editado) 
//router.get('/list-pets', (req, res) => res.render('basicRoutes/list-pets'))

//URL -> list-rescue=> renderizará la vista de basicRoutes/list-rescue.hbs
//router.get('/list-rescue', (req, res) => res.render('basicRoutes/list-rescue'))

//Contact
router.get('/contact', (req, res) => res.render('basicRoutes/contact'))


//-------------LISTADOS MASCOTAS Y RESCUES--------------------

//Muestra el listado de las mascotas inscritas --GET

router.get('/list-pets', (req, res, next) => {
    Pet.find()
        .then((allPets) => res.render('basicRoutes/list-pets', {allPets}))
        .catch(err => next(new Error(err)))
})


//Muestra el listado de las rescues inscritas

router.get('/list-rescue', (req, res, next) => {
    Rescue.find()
        .then((allRescues) => res.render('basicRoutes/list-rescue', {allRescues}))
        .catch(err => next(new Error(err)))
})

//en la BBDD de los pets
router.get('/pet-view/:id', (req, res, next) => {
    Pet.findById(req.params.id)
       .then((thePet) => res.render('basicRoutes/pet-detail', {thePet}))
       .catch(err => next(new Error(err)))
})

//en la BBDD de los rescues
router.get('/rescue-view/:id', (req, res, next) => {
    Rescue.findById(req.params.id)
       .then((theRescue) => res.render('basicRoutes/rescue-detail', {theRescue}))
       .catch(err => next(new Error(err)))
})



router.get('/pet-list-rescue', (req, res, next) => {
    Pet.find({ }, {rescueId: req.params.id})
        .then((allPets) => res.render('basicRoutes/list-pets', {allPets}))
        .catch(err => next(new Error(err)))
})



module.exports = router;