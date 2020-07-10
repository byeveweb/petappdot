const express = require("express");
const router = express.Router();
const passport = require("passport");
const hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials");

//-------------MODELS-----------------
const User = require("../models/user.model");
const Rescue = require("../models/rescue.model");
const Pet = require("../models/pet.model");

//-----------------User Rescue Profile
router.get("/profile", (req, res, next) => {
    const sessUser = req.session.passport.user;
    User.findById(sessUser)
        .then((allUser) => {
            res.render("rescue/profile", {
                allUser,
            });
        })
        .catch((err) => next(new Error(err)));
});

//Edit profile
router.get("/edit/:id", (req, res, next) => {
    User.findById(req.params.id)
        .then((theUser) => {
            res.render("rescue/user-profile-edit", theUser);
        })
        .catch((err) => next(new Error(err)));
});

router.post("/edit/:userId", (req, res, next) => {
    const {
        avatar,
        phone,
        username,
        password,
        adress
    } = req.body;

    User.findByIdAndUpdate(
            req.params.userId, {
                avatar,
                phone,
                username,
                password,
                adress,
            }, {
                new: true,
            }
        )
        .then(() => res.redirect(`/rescue/profile`))
        .catch((err) => next(new Error(err)));
});

//-----------------Rescue Profile
router.get("/profile-rescue", (req, res, next) => {
    const sessUser = req.session.passport.user;
    Rescue.find({
            userId: sessUser,
        })
        .then((allRescue) =>
            res.render("rescue/profile-rescue", {
                allRescue,
            })
            .catch((err) => next(new Error(err)))
        );
});

//New Rescue
router.get("/rescue-new", (req, res, next) => {
    Rescue.find()
        .then((theRescue) =>
            res.render("rescue/profile-rescue-new", {
                theRescue,
            })
        )
        .catch((err) => next(new Error(err)));
});

router.post("/rescue-new", (req, res, next) => {
    const sessUser = req.user;
    const {
        name,
        description,
        logo,
        location
    } = req.body;

    Rescue.create({
            name,
            description,
            logo,
            location,
            userId: sessUser,
        })
        .then(() => res.redirect("profile-rescue"))
        .catch((err) => next(new Error(err)));
});

//Edit Rescue
router.get("/editrescue/:id", (req, res, next) => {
    Rescue.findById(req.params.id)
        .then((theRescue) => {
            res.render("rescue/profile-rescue-edit", theRescue);
        })
        .catch((err) => next(new Error(err)));
});

router.post("/editrescue/:rescueId", (req, res, next) => {
    const {
        name,
        description,
        logo,
        location
    } = req.body;

    Rescue.findByIdAndUpdate(
            req.params.rescueId, {
                name,
                description,
                logo,
                location,
            }, {
                new: true,
            }
        )

        .then(() => res.redirect(`/rescue/profile-rescue`))
        .catch((err) => next(new Error(err)));
});

//Delete Rescue
router.get("/delete", (req, res, next) => {
    Rescue.findByIdAndDelete(req.query.id)
        .then(() => res.redirect("profile-rescue"))
        .catch((err) => next(new Error(err)));
});

//-------------------- Pets List
router.get("/pet-list-rescue", (req, res, next) => {
    const rescueUser = req.query.id;
    Pet.find({
            rescueId: rescueUser,
        })
        .populate("rescueId")
        .then((allPet) => {
            res.render("rescue/pet-list-rescue", {
                allPet,
            });
        })
        .catch((err) => next(new Error(err)));
});

// New pet
router.get("/pet-new/:id", (req, res, next) => {
    Rescue.findById(req.params.id)
        .then((theRescue) => {
            res.render("rescue/pet-new", {
                theRescue,
            });
        })
        .catch((err) => next(new Error(err)));
});

router.post("/pet-new", (req, res, next) => {
    const {
        typeAnimal,
        race,
        genre,
        age,
        dateBorn,
        description,
        sterilized,
        galleryImages,
        rescueId,
    } = req.body;

    console.log(rescueId);

    Pet.create({
            typeAnimal,
            race,
            genre,
            age,
            dateBorn,
            description,
            sterilized,
            galleryImages,
            rescueId,
        })
        .then(() => res.redirect("pet-list-rescue"))
        .catch((err) => next(new Error(err)));
});

// View pet
router.get("/pet-view/:id", (req, res, next) => {
    Pet.findById(req.params.id)
        // .populate('park_id')
        .then((thePet) =>
            res.render("rescue/pet-view", {
                thePet,
            })
        )
        .catch((err) => next(new Error(err)));
});

// Edit pet
router.get("/editpet/:id", (req, res, next) => {
    Pet.findById(req.params.id)
        .then((theRescue) => {
            res.render("rescue/pet-edit", theRescue);
        })
        .catch((err) => next(new Error(err)))
});

router.post("/editpet/:petId", (req, res, next) => {
    const {
        name,
        description,
        typeAnimal,
        race,
        genre,
        age,
        dateBorn,
        sterilize,
        galleryImages,
    } = req.body;

    Pet.findByIdAndUpdate(
            req.params.petId, {
                name,
                description,
                typeAnimal,
                race,
                genre,
                age,
                dateBorn,
                sterilize,
                galleryImages,
            }, {
                new: true,
            }
        )

        .then(() => res.redirect(`/rescue/pet-view/${req.params.petId}`))
        .catch((err) => next(new Error(err)))
});

// Delete animals
router.get("/delete", (req, res, next) => {
    Pet.findByIdAndDelete(req.query.id)
        .then(() => res.redirect("pet-list-rescue"))
        .catch((err) => next(new Error(err)));
});

module.exports = router;