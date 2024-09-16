const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// User routes
router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);

module.exports = router;
