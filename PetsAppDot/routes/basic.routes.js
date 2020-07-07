const express = require("express");
const router = express.Router();


const User = require("../models/user.model");

// router.get('/prueba', (req, res) => res.send('prueba guest'))

// router.get('/prueba', (req, res) => res.render('basicRoutes/guest-profile'))

// router.get("/prueba", (req, res) => {
//     Guest.find()
//         .populate("user_id")
//         .then((allGuest) => {
//             res.render("basicRoutes/guest-profile", {
//                 allGuest,
//             });
//         })
//         .catch((err) => console.log("Error en list guest", err));

//     // res.render('basicRoutes/guest-profile')
// });

router.get('/edit', (req, res) => {
    User.find()
        .then((allUser) => {
            res.render("basicRoutes/guest-profile", {
                allUser,
            });
        })
        .catch((err) => console.log("Error en list guest", err));
})


router.get('/ejemplo', function (req, res) {
    User.findById(req.params.id)
        .then((user) => {
            res.render("basicRoutes/guest-profile", {
                allUser,
            });
        })
        .catch((err) => console.log("Error en list guest", err));


    if (req.session.nombre) {
        res.send('Hola ' + req.session.nombre);
    } else {
        req.session.nombre = nombre;
        res.send('Hola usuario desconocido. De ahora en adelante te llamaremos ' + nombre);
    }
});
//Get the user id
router.get("/edit//:id", (req, res) => {
    User.findById(req.params.id)
        .then((allUser) => {
            res.render("basicRoutes/guest-profile", {
                allUser,
            });
        })
        .catch((err) => console.log("Error en list guest", err));

    // res.render('basicRoutes/guest-profile')
});


// router.post('/edit', (req, res) => res.send('form de edit guest'))

module.exports = router;