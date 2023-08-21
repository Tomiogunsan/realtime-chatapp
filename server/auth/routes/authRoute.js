const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
router.route("/register").post(authController.RegisterUser);
router.route("/login").post(authController.LoginUser);
router.route("/requestResetPassword").post(authController.RequestPasswordReset)
router.route("/resetPassword").post(authController.ResetPassword)

module.exports = router;
