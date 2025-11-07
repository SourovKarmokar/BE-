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

async function    getSingleSubCategoryController(req,res){
    try{

        const { id } = req.params;
     const getSingleSubCategory = await SubCategorySchema.findById(id).populate("category")
     res.status(200).json({
        success: true,
        message: "Single Sub Category data find successfully",
        data: getSingleSubCategory,
     })

    } catch(error){
        res.status(500).json({
            success: false,
            message: "Somthing Went Wrong"
        })
    }
}

async function updateSubCategoryController(req,res){
 const {name, description , category } = req.body
 console.log();
 console.log(name , description, category );
 const {id} = req.params
  console.log(id);
  // const subcategory = await SubCategorySchema.findById(id)
  const updateSubCategory = await SubCategorySchema.findByIdAndUpdate(
    id,
    {
      $set: {name, description, category},
     
    },
    {
      new: true
    }
  )
    
  if(category) {
    await categorySchema.updateMany(
      {subCategory: id},
      {$pull :{subCategory: id}}
    );
  }

  await categorySchema.findByIdAndUpdate(
    category,
    {
      $push:{subCategory : updateSubCategory._id}
    }
  )

  res.status(200).json({
    data : updateSubCategory
  })
}

async function deleteSubCategoryController (req, res) {
  try{
    const {id} = req.params;
  const deleteData = await SubCategorySchema.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message:"Sub Category is deleted Successfully",
    data: deleteData,
  });
  } catch (error) {
    return res.status(501).json({
      success: false,
      message:"Sumthisn is wrong in Server",
      error:error,
    })
  }



}


module.exports = {createSubCategoryController , getAllSubCategoriesController,
getSingleSubCategoryController,
updateSubCategoryController,
deleteSubCategoryController
};
