const express = require("express")
const {createSubCategoryController, getAllSubCategoriesController} = require("../../controller/subCategoryController")
const router = express.Router()

router.post("/createsubcategory",createSubCategoryController)

router.get("/getallsubcategories", getAllSubCategoriesController)



module.exports = router