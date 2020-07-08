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
    const sessUser = req.session.passport.user
    User.findById(sessUser)
        .then((allUser) => {
            res.render("rescue/profile", {
                allUser,
            });
        })
        .catch((err) => console.log("Error en list guest", err));

});

//Edit profile
router.get('/profile/:id', (req, res) => res.send('edit profile RESCUE'))
router.post('/profile/edit', (req, res) => res.send('edit profile RESCUE'))



//Rescue-Profile
// router.get('/profile-rescue', (req, res) => res.render('rescue/profile-rescue'))
router.get('/profile-rescue', (req, res, next) => {
    Rescue.find()
        // .populate('rescueOtherId')
        .then(allRescue => res.render('rescue/profile-rescue', {
            allRescue
        }))
});



//Rescue-Profile Edit
// router.get('/profile-rescue-edit', (req, res) => res.send('edit perfil de rescue'))
router.get('/profile-rescue-edit/:id', (req, res, next) => {
    Rescue.findById(req.params.id)
        .then((allRescue) => {
            res.render("rescue/profile-rescue-edit", {
                allRescue,
            });
        })
        .catch((err) => console.log("Error en list guest", err));
});

router.post('/profile-rescue-edit', (req, res) => res.send('edit perfil de rescue'))



// List animals
router.get('/pet-list-rescue', (req, res, next) => {
    Pet.find()
        .then((allPet) => {
            res.render("rescue/pet-list-rescue", {
                allPet,
            });
        })
        .catch((err) => console.log("Error en list guest", err));
});


// New animal
// router.get('/pet-new', (req, res) => res.render('rescue/pet-new'))

router.get('/pet-new', (req, res) => {
    const {
        typeAnimal,
        race,
        genre,
        length,
        park
    } = req.body

    Coaster.create({
            name,
            description,
            inversions,
            length,
            park_id: park
        })
        .then(() => res.redirect('/coasters'))
        .catch(err => next(new Error(err)))
})


// {{!-- ID: {{_id}}<br>
//         RescueId: {{rescueId}}<br>
//         VirualChip: {{virtualChip}}<br>
//         Type: {{typeAnimal}}<br>
//         Race: {{race}} <br>
//         Genre: {{genre}} <br>
//         Age: {{age}} <br>
//         Born: {{dateBorn}} <br>
//         description: {{description}} <br>
//         Sterilice: {{sterilized}} <br>
// galery: {{galleryImages}} <br> --}}





router.post('/pet-new', (req, res) => res.send('FORM de alta para pet'))


// View animal
router.get('/pet-view/:id', (req, res) => {
    Pet.findById(req.params.id)
        .populate('park_id')
        .then(thePet => res.render('rescue/pet-view', {
            thePet
        }))
        .catch(err => next(new Error(err)))
})



// Edit animal
router.get('/pet-edit', (req, res) => res.render('rescue/pet-edit'))
router.post('/pet-edit', (req, res) => res.send('FORM de edición para el pet'))

// Delete animals
router.get('/pet-delete', (req, res) => res.send('FORM de baja para pet'))




module.exports = router;