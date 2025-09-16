const express = require("express")
const router = express.Router()
const authRooter = require("./auth")

router.use("/authentication",authRooter)

module.exports = router