const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares.js");


const userController = require("../controllers/users.js");

// Sign Up 

router.get("/signup", (userController.renderSignupForm));


router.post("/signup", wrapAsync(userController.signUp));

// Login 

router.get("/login", (userController.renderLoginForm));



router.post("/login", saveRedirectUrl,
passport.authenticate("local", {
failureRedirect: "/login", failureFlash:  true}), 
(userController.logIn));

// Logout

router.get("/logout", (userController.logOut));


module.exports = router;