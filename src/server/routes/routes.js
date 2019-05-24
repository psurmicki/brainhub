const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
// const sanitizeHtml = require("sanitize-html");

// Save a new user in DB
router.route("/save").post((req, res) => {
  let user = new User(req.body);
  user
    .save()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      err.status(400).send("unable to save to database");
    });
});

//Get user by id
// router.route("/find/:id").get((req, res) => {
//   User.findOne({ _id: req.params.id }, (err, user) => {
//     if (err) {
//       res.status(404).send(err);
//     }
//     res.json({ user });
//   });
// });

// Delete user by id
// router.route("/delete/:id").get((req, res) => {
//   User.findOneAndDelete({ _id: req.params.id }, err => {
//     if (err) res.json(err);
//     else res.json(req.params.id);
//   });
// });

//Edit user by id
// router.route("/update/:id").post((req, res) => {
//   User.findById({ _id: req.params.id }, (err, user, next) => {
//     if (!user) return next(new Error("Unable to find user with this id..."));
//     else {
//       user.name = req.body.name;
//       user.surname = req.body.surnam;
//       user.email = req.body.email;
//       user.eventDate = req.body.eventDate;

//       user
//         .save()
//         .then(user => {
//           res.json("User updated successfully");
//         })
//         .catch(err => {
//           res.status(400).send("Unable to update user");
//         });
//     }
//   });
// });

//Edit user by id
// router.route("/update/:id").post((req, res, next) => {
//   User.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, user) => {
//     if (err) return next(err);
//     res.json({ user });
//   });
// });

// Get one user by id
// router.route("/user/:id").get((req, res) => {
//   User.findOne({ _id: req.params.id }).exec((err, user) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json({ user });
//   });
// });

module.exports = router;

// const updateUsername = function() {
//   return User.findOneAndUpdate({ username: 'Benny_the_boy' }, { username: 'Benny_the_man' }, { new: true }, function(err, user) {
//     if (err) throw err;
//     console.log('Nazwa uzytkownika po aktualizacji to ' + user.username);
//   })
// }
