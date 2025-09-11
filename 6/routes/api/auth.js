const express = require("express");
const registrationController = require("../../controller/registrationController");
const loginController = require("../../controller/loginController");
const router  = express.Router();

router.get("/registration",registrationController);

router.get("/login",loginController);

module.exports = router;