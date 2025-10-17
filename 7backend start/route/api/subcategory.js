const express = require("express")
const {createSubCategoryController, getAllSubCategoriesController, getSingleSubCategoryController, updateSubCategoryController} = require("../../controller/subCategoryController")
const router = express.Router()

router.post("/createsubcategory",createSubCategoryController)

router.get("/getallsubcategories", getAllSubCategoriesController);

router.get("/getsinglesubcategory/:id",getSingleSubCategoryController )

router.patch("/updatesubcategory/:id",updateSubCategoryController)



module.exports = router