const uploadImage = require("../helpers/cloudinary");
const productSchema = require("../model/productSchema");
const mongoose = require("mongoose");

const MOCK_PRODUCTS = [
  {
    _id: "65f0123456789abcdef00001",
    name: "Havic HV G-92 Gamepad",
    description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. Sleek white and blue design.",
    price: 192,
    discount: 40,
    stock: 12,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=60",
    rating: 5,
    category: "65f0123456789abcdef00101"
  },
  {
    _id: "65f0123456789abcdef00002",
    name: "AK-900 Wired Keyboard",
    description: "Mechanical keyboard with RGB lighting. Durable keys and ergonomic layout for professional gamers.",
    price: 960,
    discount: 35,
    stock: 8,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33faf9c1?w=500&auto=format&fit=crop&q=60",
    rating: 4.5,
    category: "65f0123456789abcdef00101"
  },
  {
    _id: "65f0123456789abcdef00003",
    name: "IPS LCD Gaming Monitor",
    description: "24-inch Curved Full HD monitor with high refresh rate and vibrant colors. Perfect for gaming and design.",
    price: 370,
    discount: 30,
    stock: 15,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60",
    rating: 4.9,
    category: "65f0123456789abcdef00101"
  },
  {
    _id: "65f0123456789abcdef00004",
    name: "RGB liquid CPU Cooler",
    description: "High-performance CPU liquid cooler with customizable RGB lighting. Keeps your system cool under heavy loads.",
    price: 160,
    discount: 10,
    stock: 20,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format&fit=crop&q=60",
    rating: 4.4,
    category: "65f0123456789abcdef00101"
  },
  {
    _id: "65f0123456789abcdef00005",
    name: "ASUS FHD Gaming Laptop",
    description: "High-performance gaming laptop with FHD display and powerful graphics card. Ideal for heavy gaming and rendering.",
    price: 960,
    discount: 35,
    stock: 5,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    category: "65f0123456789abcdef00101"
  },
  {
    _id: "65f0123456789abcdef00006",
    name: "Gucci duffle bag",
    description: "Luxury duffle bag made with premium leather and canvas materials. Spacious and stylish for elite travel.",
    price: 960,
    discount: 35,
    stock: 7,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
    rating: 4.7,
    category: "65f0123456789abcdef00102"
  },
  {
    _id: "65f0123456789abcdef00007",
    name: "GP11 Shooter USB Gamepad",
    description: "USB gamepad with ergonomic design and premium triggers. Compatible with multiple platforms.",
    price: 550,
    discount: 15,
    stock: 14,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500&auto=format&fit=crop&q=60",
    rating: 4.3,
    category: "65f0123456789abcdef00101"
  },
  {
    _id: "65f0123456789abcdef00008",
    name: "Quilted Satin Jacket",
    description: "Stylish satin jacket with quilted design. Warm, comfortable, and outstanding casual wear.",
    price: 750,
    discount: 12,
    stock: 25,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    category: "65f0123456789abcdef00102"
  }
];

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
        const size = parseInt(req.query.size) || 10;
        const skip = (page - 1) * size;

        let queryObj = {};
        if (req.query.category) {
            queryObj.category = req.query.category;
        }
        if (req.query.subCategory) {
            queryObj.subCategory = req.query.subCategory;
        }

        let totalProduct = 0;
        let product = [];

        // Immediately bypass database query buffering if mongoose is disconnected
        if (mongoose.connection.readyState === 1) {
            try {
                totalProduct = await productSchema.countDocuments(queryObj);
                product = await productSchema.find(queryObj).skip(skip).limit(size);
            } catch (dbErr) {
                console.warn("⚠️ Database query failed, falling back to mock products", dbErr.message);
            }
        } else {
            console.log("ℹ️ Mongoose is not connected. Instantly serving mock products.");
        }

        // Seeding/Mock fallback if database is empty or offline
        if (totalProduct === 0 || product.length === 0) {
            let filteredMock = MOCK_PRODUCTS;
            if (req.query.category) {
                filteredMock = filteredMock.filter(p => p.category === req.query.category);
            }
            product = filteredMock.slice(skip, skip + size);
            totalProduct = filteredMock.length;
        }
        
        res.status(200).json({
            success: true,
            Message: "All products get Successfully ",
            data: product,
            total: totalProduct
        });
    } catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to get Data",
            error: error.message
        });
    }
}

async function getSingleProductController(req,res){
    try{
        const {id} = req.params;
        let getsingleProduct = null;

        // Immediately bypass database query buffering if mongoose is disconnected
        if (mongoose.connection.readyState === 1) {
            try {
                getsingleProduct = await productSchema.findById(id);
            } catch (dbErr) {
                console.warn("⚠️ Database lookup failed, searching in mock products fallback.", dbErr.message);
            }
        }

        // Fallback search in mock data
        if (!getsingleProduct) {
            getsingleProduct = MOCK_PRODUCTS.find(p => p._id === id);
        }

        if (!getsingleProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Single Product data find successful",
            data: getsingleProduct
        });
    } catch(error){
        res.status(500).json({
            success: false ,
            message: "Something Went Wrong "
        });
    }
}

async function updateProductController(req, res) {
    try {
        const { id } = req.params;
        const updateData = { ...req.body };

        if (req.file) {
            const imgUrl = await uploadImage(req.file.path);
            updateData.image = imgUrl.secure_url;
        }

        const product = await productSchema.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            error: error.message
        });
    }
}

async function deleteProductController(req, res) {
    try {
        const { id } = req.params;
        const product = await productSchema.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            error: error.message
        });
    }
}

module.exports = {createProductController ,getAllProductController ,
getSingleProductController, updateProductController, deleteProductController
};
