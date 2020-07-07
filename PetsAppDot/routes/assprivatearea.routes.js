const express = require("express");
const router = express.Router();
const passport = require("passport");


router.get("/rescue", (req, res) => res.send("rescues"))

module.exports = router;