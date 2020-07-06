const express = require("express");
const router = express.Router();
const passport = require("passport");


router.get("/associations", (req, res) => res.send("asociaciones"))

module.exports = router;