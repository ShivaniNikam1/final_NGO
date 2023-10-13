const express = require("express");
const { registerUser, authUser, logoutUser, getUserProfile } = require("../controller/userController");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')

router.route("/").post(registerUser)
router.route("/login").post(authUser)
router.route("/logout").post(logoutUser)
router.route("/profile").get(protect,getUserProfile)

module.exports=router