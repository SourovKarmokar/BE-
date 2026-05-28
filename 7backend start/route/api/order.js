const express = require("express")

const router = express.Router();
const {createOrderController, getAllOrdersController, updateOrderStatusController} = require('../../controller/orderController.js')

router.post("/payment", createOrderController)
router.get("/getallorders", getAllOrdersController)
router.patch("/updatestatus/:id", updateOrderStatusController)

module.exports = router;