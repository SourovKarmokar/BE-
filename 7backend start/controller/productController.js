const uploadImage = require("../helpers/cloudinary");
const productSchema = require("../model/productSchema");

async function createProductController(req, res) {
   
    

    
 try{
       const {name, description, price, category , discount , stock , image} = req.body

    //    const imageName = req.file.filename

    const imgPath = req.file.path
        console.log(imgPath);
        
       const imgUrl = await uploadImage(imgPath)
       console.log(imgUrl ,"img");
       
       
    const product = await new productSchema({
        name, description, price, category, discount, stock , image : imgUrl.secure_url,
    })
    await product.save()
    res.status(201).json({
        success: true,
        message: "Product create successful",
        data: product
    })
 }catch (error){
    res.status(500).json({
        success: false,
        message: "Something Went Wrong",
        error: error.message
    })
 }
}

async function getAllProductController(req,res){
    try{
        const product = await productSchema.find()
        res.status(200).json({
            success:true,
            Message: "All products get Successfully ",
            data: product
        })
    }catch(error){
        res.status(500).json({
            message: "faild to get Data"
        })
    }
}

module.exports = {createProductController ,getAllProductController};
