const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

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

module.exports = router;
