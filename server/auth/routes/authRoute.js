const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
router.route("/register").post(authController.RegisterUser);
router.route("/login").post(authController.LoginUser);


module.exports = router;
