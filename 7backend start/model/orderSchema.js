const mongoose = require("mongoose")
const {Schema} = mongoose;

const orderSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    postcode: String,
    totalPrice: String,
    products: Array,
    transactionId: String,
    paymentStatus: {
        type: String,
        default: "Pending"
    },
}, { timestamps: true })

module.exports = mongoose.model("OrderList" , orderSchema)