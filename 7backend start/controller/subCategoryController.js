const categorySchema = require("../model/categorySchema");
const SubCategorySchema = require("../model/SubCategorySchema");

async function createSubCategoryController(req, res) {
  try {
    const { name, description, category } = req.body;
    console.log(name, description, category);
    const subCategory = new SubCategorySchema({
      name,
      description,
      category,
    });
    await subCategory.save();
    await categorySchema.findByIdAndUpdate(
      category,
      {
        $push: { subCategory: subCategory._id },
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      message: "subcategory created successfully",
      data: subCategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
}

async function getAllSubCategoriesController(req, res) {
  console.log("cool");

  try {
    const subcategory = await SubCategorySchema
    .find()
    
    res.status(200).json({
      success: true,
      message: "All sub categories get successfully ",
      data: subcategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something Went Wrong ",
    });
  }
}

module.exports = {createSubCategoryController , getAllSubCategoriesController};
