const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

//Get the user id
router.get("/profile", (req, res, next) => {
    const sessUser = req.session.passport.user
    User.findById(sessUser)
        .then((allUser) => {
            res.render("adopter/index", {
                allUser,
            });
        })
        .catch((err) => console.log("Error en list guest", err));

    // res.send("adopter/profile",
    //     sessUser,
    // );

});



router.get("/profile/:id", (req, res) => {
    User.findById(req.params.id)
        .then((allUser) => {
            res.render("adopter/profile-edit", {
                allUser,
            });
        })
        .catch((err) => console.log("Error en list guest", err));

    // res.render('basicRoutes/guest-profile')
});




//Edit profile
// router.get('/profile/edit', (req, res) => res.render('adopter/profile-edit'))
// router.post('/profile/edit', (req, res) => res.render('adopter/profile-edit'))

module.exports = router;