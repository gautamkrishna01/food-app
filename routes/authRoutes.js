const express = require("express");
const {
  registerController,
  loginController,
} = require("../controller/authController");
const router = express.Router();
//register || POSt
router.post("/register", registerController);

//login || PODT

router.post("/login", loginController);

module.exports = router;
