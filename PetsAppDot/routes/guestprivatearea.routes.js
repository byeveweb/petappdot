const express = require("express");
const router = express.Router();
const passport = require("passport");

// Role checker middleware
router.get('/profile', (req, res) => res.send('inicio de area privada de GUEST'))

//Edit profile
router.get('/profile/edit', (req, res) => res.send('edit profile GUEST'))
router.post('/profile/edit', (req, res) => res.send('edit profile GUEST'))

module.exports = router;