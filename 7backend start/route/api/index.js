const express = require("express")
const router = express.Router()
const authRooter = require("./auth")
const homeRouter = require("./home") 
const adminRouter = require("./admin")
const categoryRouter = require("./category")


router.use("/authentication",authRooter)
router.use("/home" , homeRouter)
router.use("/admin",adminRouter)
router.use("/category",categoryRouter)

module.exports = router