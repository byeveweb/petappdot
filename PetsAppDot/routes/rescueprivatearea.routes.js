const express = require("express");
const router = express.Router();
const passport = require("passport");

// Role checker middleware
// router.get('/profile', (req, res) => res.send('inicio de area privada de RESCUE'))

const User = require("../models/user.model");
const Rescue = require("../models/rescue.model");
const Pet = require("../models/pet.model");

//Perfil de Usuario Rescue
router.get("/profile", (req, res, next) => {
    const sessUser = req.session.passport.user;
    User.findById(sessUser)
        .then((allUser) => {
            res.render("rescue/profile", {
                allUser,
            });
        })
        .catch((err) => console.log("Error en list guest", err));
});

//Edit profile
// router.get('/profile/:id', (req, res) => res.send('edit profile RESCUE'))
router.get("/editprofile", (req, res) => {
    Rescue.findById(req.query.id)
        .then((theRescue) =>
            res.render("rescue/user-profile-edit", {
                theRescue,
            })
        )
        .catch((err) => next(new Error(err)));
});
router.post("/profile/edit", (req, res) => res.send("edit profile RESCUE"));

//Rescue-Profile
// router.get('/profile-rescue', (req, res) => res.render('rescue/profile-rescue'))
router.get("/profile-rescue", (req, res, next) => {
    const sessUser = req.session.passport.user;
    // res.send(sessUser)
    Rescue.find({
            userId: sessUser,
        })
        // .populate('userId')
        .then((allRescue) =>
            res.render("rescue/profile-rescue", {
                allRescue,
            })
        );
});

//Rescue-Profile New
router.get("/rescue-new", (req, res) => {
    Rescue.find()
        //  .populate('Park')
        .then((theRescue) =>
            res.render("rescue/profile-rescue-new", {
                theRescue,
            })
        )
        .catch((err) => console.log("Error traer listado theParklist", err));
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

//Rescue-Profile Edit
router.get("/editrescue", (req, res) => {
    Rescue.findById(req.query.id)
        .then((theRescue) =>
            res.render("rescue/profile-rescue-edit", {
                theRescue,
            })
        )
        .catch((err) => next(new Error(err)));
});

router.post("/profile-rescue-edit", (req, res) =>
    res.send("edit perfil de rescue")
);

// List animals
router.get("/pet-list-rescue", (req, res) => {
    const rescueUser = req.query.id;
    // res.send(rescueUser)
    Pet.find({
            rescueId: rescueUser,
        })
        .populate("rescueId")
        .then((allPet) => {
            res.render("rescue/pet-list-rescue", {
                allPet,
            });
        })
        .catch((err) => console.log("Error en list guest", err));
});

// New animal
router.get("/pet-new", (req, res) => {
    const userId = req.user


    Rescue.find({
            userId: userId,
        })
        // .populate('userId')
        .then(userRescue =>
            userRescue === {
                userId
            })


    Pet.find()
        .then((thePet) =>
            res.render("rescue/pet-new", {
                thePet,
            })
        )
        .catch((err) => console.log("Error traer listado theParklist", err));
});

router.post("/pet-new", (req, res, next) => {

    Rescue.findById()
    console.log(req.body.id)
    const rescueUser = req.query.id;
    const {
        typeAnimal,
        race,
        genre,
        age,
        dateBorn,
        description,
        sterilized,
        galleryImages
    } = req.body;

    Pet.create(req.query.id, {
            typeAnimal,
            race,
            genre,
            age,
            dateBorn,
            description,
            sterilized,
            galleryImages,
            rescueId: rescueUser
        })
        .then(() => res.redirect(`pet-list-rescue`))
        .catch((err) => next(new Error(err)));
    // const rescueUser = req.query.id
    //   const {
    //     typeAnimal,
    //     race,
    //     genre,
    //     age,
    //     dateBorn,
    //     description,
    //     sterilized,
    //     galleryImages,
    //     rescueId
    //   } = req.body;
    //   Pet.create({
    //     typeAnimal,
    //     race,
    //     genre,
    //     age,
    //     dateBorn,
    //     description,
    //     sterilized,
    //     galleryImages,
    //     rescueId: rescueUser,
    //   })
    //     .then(() => res.redirect("pet-list-rescue"))
    //     .catch((err) => next(new Error(err)));
});

// View animal
router.get("/pet-view/:id", (req, res) => {
    Pet.findById(req.params.id)
        // .populate('park_id')
        .then((thePet) =>
            res.render("rescue/pet-view", {
                thePet,
            })
        )
        .catch((err) => next(new Error(err)));
});

// Edit animal
// router.get('/pet-edit', (req, res) => res.render('rescue/pet-edit'))
router.get("/edit", (req, res) => {
    Pet.findById(req.query.id)
        .then((thePet) =>
            res.render("rescue/pet-edit", {
                thePet,
            })
        )
        .catch((err) => next(new Error(err)));
});
router.post("/pet-edit", (req, res) => res.send("FORM de edición para el pet"));

// Delete animals
// router.get('/pet-delete', (req, res) => res.send('FORM de baja para pet'))
router.get("/delete", (req, res, next) => {
    Pet.findByIdAndDelete(req.query.id)
        .then(() => res.redirect("pet-list-rescue"))
        .catch((err) => next(new Error(err)));
});

module.exports = router;