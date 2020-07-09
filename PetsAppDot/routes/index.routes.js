const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.render('index'))

// Endpoints
router.get("/", (req, res) => {
  console.log("¿Está el usuario logeado?", req.isAuthenticated());
  res.render("index");
});


//Aqui German añade en su video:

// const Picture = require('../models/picture model')

// router.get('/', (req, res, next) => res.render('index'))
// router.get('/gallery', (req, res, next) => { 

//   Picture.find()
//   .then(allThePictures => res.render('pages/gallery-page', {allThePictures}))
// .catch(err => next (new Error (err)))

// })











module.exports = router;
