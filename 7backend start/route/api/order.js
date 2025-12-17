const express = require("express")

const router = express.Router();
const {createOrderController} =require('../../controller/orderController.js')

router.post("/payment" , createOrderController) 


module.exports = router;