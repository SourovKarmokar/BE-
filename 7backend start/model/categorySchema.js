const mongoose = require("mongoose")
const {Schema} = mongoose;

const categorySchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    description:{
        type: String
    }
})

module.exports = mongoose.model("CategoryList", categorySchema)