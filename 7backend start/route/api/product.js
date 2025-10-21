const express = require("express")
const createProductController = require("../../controller/productController")
const router = express.Router()

router.post("/createproduct",createProductController)

module.exports = router;