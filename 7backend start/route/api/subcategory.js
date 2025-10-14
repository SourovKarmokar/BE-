const express = require("express")
const createSubCategoryController = require("../../controller/subCategoryController")
const router = express.Router()

router.post("/createsubcategory",createSubCategoryController)



module.exports = router