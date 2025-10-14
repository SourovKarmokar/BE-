const SubCategorySchema = require("../model/SubCategorySchema");

async function  createSubCategoryController(req,res){
    try{

        const {name, description , category} = req.body
    console.log(name, description,category);
    const subCategory = new SubCategorySchema({
        name,
        description,
        category
    })
    await subCategory.save();
    res.status(200).json({
        success: true,
        message: "subcategory created successfully",
        data: subCategory
    })

    } catch(error){
        res.status(500).json({
            success: false,
            message: "Something went Wrong"
        })
    }
}

module.exports = createSubCategoryController