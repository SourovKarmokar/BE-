const express = require("express")
const router = express.Router()
const mainRouter = require("./api") 

router.use("/api/v1",mainRouter)

module.exports = router