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
        const category =  await categorySchema.find()
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


module.exports = {createCategoryController , getAllCategoriesController,getSingleCategoryController}