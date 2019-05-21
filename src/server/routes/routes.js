const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
// const sanitizeHtml = require("sanitize-html");

// Add a new user
router.route("/add").post((req, res) => {
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

// Get one user by cuid
// router.route("/user/:id").get((req, res) => {
//   User.findOne({ _id: req.params.id }).exec((err, user) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json({ user });
//   });
// });

// Delete user by id
router.route("/delete/:id").get((req, res) => {
  User.findOneAndDelete({ _id: req.params.id }, function(err, user) {
    if (err) res.json(err);
    else res.json(req.params.id);
  });
});

//Edit user by id

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id, function(err, user) {
    if (!user) res.status(404).send("user not found in database");
    else {
      user.name = req.body.name;
      user.surname = req.body.surname;
      user.email = req.body.email;
      user.eventDate = req.body.eventDate;
      user
        .save()
        .then(user => {
          res.json("Update completed");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// router.route("/update/:id").post((req, res) => {
//   User.update({ _id: req.params.id }, req.body.user).exec((err, user) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json({ user });
//   });
// });

module.exports = router;
