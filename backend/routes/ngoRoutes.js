const express = require("express");
const { registerNgo , authNgo , logoutNgo,getNgoProfile } = require("../controller/ngoController");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')



router.route("/").post(registerNgo)
router.route("/login").post(authNgo)
router.route("/logout").post(logoutNgo)
// router.route("/profile").get(protect,getNgoProfile)

module.exports=router