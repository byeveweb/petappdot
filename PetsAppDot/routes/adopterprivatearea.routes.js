const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Pet = require("../models/pet.model");

//Get the user id
router.get("/profile", (req, res, next) => {
    const sessUser = req.session.passport.user
    User.findById(sessUser)
        .then((allUser) => {
            res.render("adopter/profile", {
                allUser,
            });
        })
        .catch((err) => console.log("Error en list guest", err));

});



router.get("/profile/:id", (req, res) => {
    User.findById(req.params.id)
        .then((allUser) => {
            res.render("adopter/profile-edit", {
                allUser,
            });
        })
        .catch((err) => console.log("Error en list guest", err));
});

router.get('/pet-adopter', (req, res) => res.render('adopter/pet-adopter'))


module.exports = router;