const orderSchema = require("../model/orderSchema");

const createOrderController = async (req, res) => {
   const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    postcode,
    totalPrice,
    products
   }= req.body

   const orderData = new orderSchema({
     firstName,
    lastName,
    email,
    phone,
    address,
    city,
    postcode,
    totalPrice,
    products
   })

   orderData.save()
   return res.status(201).json({
    success:true,
    message: "Order Create Successfully",
    data: orderData
   })
   
};

module.exports = {
    createOrderController
};