const express = require("express");
const router = express.Router();
const passport = require("passport");

// Role checker middleware
router.get('/profile', (req, res) => res.send('inicio de area privada de guest'))

module.exports = router;