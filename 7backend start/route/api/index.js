const express = require("express")
const router = express.Router()
const authRooter = require("./auth")
const homeRouter = require("./home") 

router.use("/authentication",authRooter)
router.use("/home" , homeRouter)

module.exports = router