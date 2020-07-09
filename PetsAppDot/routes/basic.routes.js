const express = require("express");
const router = express.Router();
// const hbs = require('hbs');


// hbs.registerPartials(__dirname + "/views/basicRoutes/partials")


const Pet = require("../models/pet.model");
const Rescue = require("../models/rescue.model");


//-------------LISTADOS MASCOTAS Y RESCUES--------------------

//Muestra el listado de las mascotas inscritas --GET

router.get('/list-pets', (req, res, next) => {
    Pet.find({
            adopter: false
        })
        .then((allPets) => res.render('basicRoutes/list-pets', {
            allPets
        }))
        .catch(err => next(new Error(err)))
})


//Muestra el listado de las rescues inscritas

router.get('/list-rescue', (req, res, next) => {
    Rescue.find()
        .then((allRescues) => res.render('basicRoutes/list-rescue', {
            allRescues
        }))
        .catch(err => next(new Error(err)))
})

//en la BBDD de los pets
router.get('/pet-view/:id', (req, res, next) => {
    Pet.findById(req.params.id)
        .then((thePet) => res.render('basicRoutes/pet-detail', {
            thePet
        }))
        .catch(err => next(new Error(err)))
})

//en la BBDD de los rescues
router.get('/rescue-view/:id', (req, res, next) => {
    Rescue.findById(req.params.id)
        .then((theRescue) => res.render('basicRoutes/rescue-detail', {
            theRescue
        }))
        .catch(err => next(new Error(err)))
})



router.get('/pet-list-rescue/:id', (req, res, next) => {
    Pet.find({}, {
            rescueId: req.params.id
        })
        .then((allPets) => res.render('basicRoutes/list-pets', {
            allPets
        }, {
            rescueId
        }))
        .catch(err => next(new Error(err)))
})


module.exports = router;