const express = require("express")
const router = express.Router()
const appAuth = require("./auth")

router.use("/authentication",appAuth)


module.exports = router