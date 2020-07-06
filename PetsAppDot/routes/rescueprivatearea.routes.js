const express = require("express");
const router = express.Router();
const passport = require("passport");

// Role checker middleware
router.get('/profile', (req, res) => res.send('inicio de area privada de RESCUE'))


//Edit profile
router.get('/profile/edit', (req, res) => res.send('edit profile RESCUE'))
router.post('/profile/edit', (req, res) => res.send('edit profile RESCUE'))

// List animals
router.get('/pet-list', (req, res) => res.send('lista de los pets publicados'))

// New animal
router.get('/pet-new', (req, res) => res.send('FORM de alta para pet'))
router.post('/pet-new', (req, res) => res.send('FORM de alta para pet'))

// Edit animal
router.get('/pet-edit', (req, res) => res.send('FORM de edición para el pet'))
router.post('/pet-edit', (req, res) => res.send('FORM de edición para el pet'))

// Delete animals
router.get('/pet-delete', (req, res) => res.send('FORM de baja para pet'))




module.exports = router;