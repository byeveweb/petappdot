const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.render('index'))

// Endpoints
router.get("/", (req, res) => {
  console.log("¿Está el usuario logeado?", req.isAuthenticated());
  res.render("index");
});


//IMAGENES

const Pet = require('../models/pet.model')

router.get('/', (req, res, next) => res.render('index'))
router.get('/gallery-page', (req, res, next) => { 

  Pet.findById()
  .then(allThePictures => res.render('pages/gallery-page', {allThePictures}))
  .catch(err => next (new Error (err)))

})


module.exports = router;
