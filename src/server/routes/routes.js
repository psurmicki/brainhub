const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// Add a new user
router.route("/user").post(UserController.addUser);

// Get one user by cuid
router.route("/user/:cuid").get(UserController.getUser);

// Delete user by cuid
router.route("/user/:cuid").delete(UserController.deleteUser);

//Edit user by cuid
router.route("/user/:cuid").put(UserController.editUser);

module.exports = router;
