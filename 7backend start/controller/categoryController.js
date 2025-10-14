const categorySchema = require("../model/categorySchema");

function createCategoryController(req,res){
    
    const {name,description} = req.body
    console.log(name, description);
    
    const category = new categorySchema ({
        name,
        description
    })
    
    category.save()

    return res.status(201).json({
        success: true,
        message: "Category Create Successfully ",
        date: category

    })
    
}


async function getAllCategoriesController(req,res){
    console.log("cool");

    try{
        const category =  await categorySchema.find().populate("subCategory")
        res.status(200).json({
            success: true,
            message: "All categories get successfully ",
            data: category,
        })

    } catch (error) {
        res.status(500).json({
            success: false ,
            message: "Something Went Wrong "
        })
    }
    
}


 async function getSingleCategoryController(req,res){
    try{

        const {id} = req.params
        const getsinglecategory = await categorySchema.findById(id)
        res.status(200).json({
            success: true,
            message: "Single Category data find successful",
            data: getsinglecategory

        })
    } catch(error){
        res.status(500).json({
            success: false ,
            message: "Something Went Wrong "
        })
    }

}


async function updateCategoryController(req,res){
  try{
      const {id} = req.params
    const {name,  description} = req.body
    
    console.log(name);
    const category = await  categorySchema.findByIdAndUpdate(
        id,{
            $set:{name,description}
        },
        {
            new: true
        }
    );
    res.status(200).json({
        success: true,
        message:"This category updated successfully done",
        data: category,
    })
  } catch (error){
        res.status(500).json({
            success: false,
            message:"something went wrong",
        })
  }
}


async function deleteCategoryController(req,res){
    try{
        const {id} = req.params
        const category = await categorySchema.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "this Category Deleted Successfully done",
            data: category
        })

    } catch (error){
       res.status(500).json({
        success: false,
        message: "Something went Wrong",
       }) 
    }
    
}



module.exports = {createCategoryController , getAllCategoriesController,getSingleCategoryController,
updateCategoryController,
deleteCategoryController
}