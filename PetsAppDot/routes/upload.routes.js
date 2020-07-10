const express = require('express')
const router = express.Router()
const multer = require('multer')
const Pet = require('../models/pet.model')

// // File upload settings
// const uploadLocal = multer({dest: './public/uploads/'})


// // Local upload files routes
// router.get('/upload-local', (req, res, next) => res.render('files/upload-form-local'))
// router.post('/upload-local', uploadLocal.single('imageFile'), (req, res, next) => {

// console.log("Multer crea la propiedad 'file' en el objeto req:", req.file)

// // Validador
// req.file.size > 3000000 ? console.log("El tamaño de imagen es tochísimo") : console.log('El tamaño de imagen mola')

// Pet.create({
//     nameImg: req.body.imageName,
//     pathImg: `/uploads/${req.file.filename}`,
//     originalName: req.file.originalname
//     })
//     .then(() => res.redirect('/list-pets'))
//     .catch(err => next(new Error(err)))
// })


// CDN file upoloads routs
const cloudUploader = require('../configs/cloudinary.config')

router.get('/upload-cdn', (req, res, next) => res.render('files/upload-form-cdn'))
router.post('/upload-cdn', cloudUploader.single('imageFile'), (req, res, next) => {

    console.log('Multer, en combinación con Cloudinary, crea este req.file:', req.file)

    Pet.create({
            nameImg: req.body.imageName,
            pathImg: req.file.url,
            originalName: req.file.originalname
        })
        .then(() => res.redirect('/gallery'))
        .catch(err => next(new Error(err)))
})


 module.exports = router