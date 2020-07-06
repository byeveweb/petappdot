const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/user.model")


const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')
router.get('/profile', checkAuthenticated, (req, res) => res.render('profile', {
    user: req.user
}))

// Check logged in session & roles
// router.get('/', checkRole(['GUEST', 'ADMIN']), (req, res) => res.send('AQUÍ VAN LAS HABITACIONES PARA GUEST'))
// router.get('/', checkRole(['GUEST']), (req, res) => res.send('AQUÍ VAN TUS HABITACIONES PARA EDITOR'))
// router.get('/', checkRole(['ADMIN']), (req, res) => res.send('AQUÍ VAN TODAS LAS HABITACIONES PARA ADMIN'))


module.exports = router;