const mongoose = require("mongoose")
const {Schema} = mongoose;
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,
    },
    stock:{
        type: Number
    },
    discount:{
        type: Number
    },
    quantity:{
        type: Number
    },
    // sold:{
    //     type: Number
    // },
    image:{
        type: String
    },
    rating:{
        type: Number
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: "CategoryList",
        required: true
    },

    subCategory:{
        type: Schema.Types.ObjectId,
        ref: "SubCategoryList",
    }
})

module.exports = mongoose.model("ProductList", productSchema) 