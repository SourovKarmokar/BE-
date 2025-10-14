const express = require("express");
const {createCategoryController,getAllCategoriesController, getSingleCategoryController, updateCategoryController} = require("../../controller/categoryController");
const router = express.Router();

router.post("/createcategory", createCategoryController);
router.get("/getallcategories", getAllCategoriesController);
router.get("/getsinglecategory/:id",getSingleCategoryController);
router.patch("/updatecategory/:id", updateCategoryController);



module.exports = router;