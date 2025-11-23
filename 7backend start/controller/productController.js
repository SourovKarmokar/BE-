const uploadImage = require("../helpers/cloudinary");
const productSchema = require("../model/productSchema");

async function createProductController(req, res) {
    try{
        const page = (req.query.page) 
        const size = (req.query.size) 

        console.log(page, "page");
        console.log(size, "size");
        
        const totalProduct = await productSchema.countDocuments({})
        console.log(totalProduct, "totalProduct") ;
        
        // ✅ rating, quantity, subCategory add করুন
        const {
            name, 
            description, 
            price, 
            category, 
            discount, 
            stock, 
            rating,      // ← এটা add করুন
            quantity,    // ← এটাও add করুন
            subCategory  // ← এটাও add করুন
        } = req.body

        const imgPath = req.file.path
        console.log(imgPath);
        
        const imgUrl = await uploadImage(imgPath)
        console.log(imgUrl ,"img");
       
        // ✅ সব field সহ product create করুন
        const product = await new productSchema({
            name, 
            description, 
            price, 
            category, 
            subCategory,   // ← add করুন
            discount, 
            stock,
            quantity,      // ← add করুন
            rating,        // ← এখন কাজ করবে
            image: imgUrl.secure_url,
        })
        
        await product.save()
        
        res.status(201).json({
            success: true,
            message: "Product create successful",
            data: product
        })
        
    } catch (error){
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            error: error.message
        })
    }
}

async function getAllProductController(req,res){
    try{
        const page = parseInt(req.query.page) || 1;
        console.log(page, "page");

        const size = parseInt(req.query.size) || 10;
        console.log(size, "size");

        const skip = (page - 1) * size;
        console.log(skip, "skip");

        const totalProduct = await productSchema.countDocuments({})
        console.log(totalProduct,"totalproduct");

        const product = await productSchema.find().skip(skip).limit(size)
        
        res.status(200).json({
            success:true,
            Message: "All products get Successfully ",
            data: product,
            total: totalProduct
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to get Data",
            error: error.message
        })
    }
}

module.exports = {createProductController ,getAllProductController};
