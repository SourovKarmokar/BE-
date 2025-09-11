const express = require("express");
const router  = express.Router();
const authenticationRoute = require("./auth")

router.use("/authentication",authenticationRoute);

module.exports = router;