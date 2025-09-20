const express = require("express")
const router = express.Router()
const mainRouter = require("./api") 

router.use(process.env.BASE_URL,mainRouter)

module.exports = router