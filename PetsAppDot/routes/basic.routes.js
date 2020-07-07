const express = require("express");
const router = express.Router();


const User = require("../models/user.model");

router.get('/list-rescue', (req, res) => res.render('basicRoutes/list-rescue'))
router.get('/list-pets', (req, res) => res.render('basicRoutes/list-pets'))



module.exports = router;