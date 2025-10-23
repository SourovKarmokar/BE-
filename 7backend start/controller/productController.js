const productSchema = require("../model/productSchema");

async function createProductController(req, res) {
   
    

    
 try{
       const {name, description, price, category , discount , stock , image} = req.body

       const imageName = req.file.filename

    const product = await new productSchema({
        name, description, price, category, discount, stock , image : `http://localhost:3000/api/v1/${imageName}`
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
module.exports = createProductController;
