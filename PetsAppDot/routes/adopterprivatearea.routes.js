const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Pet = require("../models/pet.model");

//Get the user id
router.get("/profile", (req, res, next) => {
  const sessUser = req.session.passport.user;
  User.findById(sessUser)
    .then((allUser) => {
      res.render("adopter/profile", {
        allUser,
      });
    })
    .catch((err) => next(new Error(err)));
});

router.get("/profile/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((allUser) => {
      res.render("adopter/profile-edit", {
        allUser,
      });
    })
    .catch((err) => next(new Error(err)));
});

router.get("/pet-adopter", (req, res, next) => {
  const sessUser = req.user.id;
  Pet.find({
    adopterId: sessUser,
  })

    .then((thePet) =>
      res.render("adopter/pet-adopter", {
        thePet,
      })
    )
    .catch((err) => next(new Error(err)));
});

router.get("/pet-adopter/:id", (req, res) => {
  const sessUser = req.user.id;
  Pet.findByIdAndUpdate(req.params.id, {
    adopterId: sessUser,
    adopter: true,
  });
  // .then(() => res.render('adopter/pet-adopter'))
  // .catch(err => next(new Error(err)))
  res.send(`${req.params.id}, ${sessUser}`);
});

module.exports = router;
