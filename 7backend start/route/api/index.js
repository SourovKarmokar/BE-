const express = require("express")
const router = express.Router()
const authRooter = require("./auth")
const homeRouter = require("./home") 
const adminRouter = require("./admin")

router.use("/authentication",authRooter)
router.use("/home" , homeRouter)
router.use("/admin",adminRouter)

module.exports = router