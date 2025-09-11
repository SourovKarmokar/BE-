const express = require("express");
const router  = express.Router();
const authenticationRoute = require("./auth");
const productRoute = require("./product")

router.use("/authentication",authenticationRoute);
router.use("/product",productRoute)

module.exports = router;