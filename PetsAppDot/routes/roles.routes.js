const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/user.model")


const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')
router.get('/profile', checkAuthenticated, (req, res) => res.render('profile', {
    user: req.user
}))

// Role checker middleware
const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.redirect('/login')

// Alternativa para enviar a la vista en el renderizado
// const checkAdmin = () => req.user.role.includes('ADMIN') // Alternativa
// const checkUser = () => req.user.role.includes('USER') // Alternativa
// const checkGuest = () => req.user.role.includes('GUEST') // Alternativa


// Endpoints
router.get('/', (req, res) => {
    console.log('¿Está el usuario logeado?', req.isAuthenticated())
    res.render('index')
})


// // Check logged in session 
// router.get('/profile', checkAuthenticated, (req, res) => res.render('profile', {
//     user: req.user
// }))


//Check logged in session & roles
router.get('/rooms', checkRole(['GUEST', 'RESCUE', 'ADMIN']), (req, res) => res.send('AQUÍ VAN LAS HABITACIONES PARA GUEST'))
router.get('/edit-rooms', checkRole(['ADMIN', 'EDITOR']), (req, res) => res.send('AQUÍ VAN TUS HABITACIONES PARA EDITOR'))
router.get('/all-rooms', checkRole(['ADMIN']), (req, res) => res.send('AQUÍ VAN TODAS LAS HABITACIONES PARA ADMIN'))



module.exports = router;