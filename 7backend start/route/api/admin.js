const express = require("express");
const authMiddleWare = require("../../middleware/authMiddleware");
const adminMiddleware = require("../../middleware/adminMiddleware");
const userSchema = require("../../model/userSchema");
const productSchema = require("../../model/productSchema");
const orderSchema = require("../../model/orderSchema");
const router = express.Router();

router.get("/welcome", authMiddleWare, adminMiddleware, (req, res) => {
  res.json({ message: "Welcome to admin dashboard" });
});

router.get("/stats", authMiddleWare, adminMiddleware, async (req, res) => {
  try {
    const totalUsers = await userSchema.countDocuments({});
    const totalProducts = await productSchema.countDocuments({});
    const totalOrders = await orderSchema.countDocuments({});
    const orders = await orderSchema.find({});
    const totalRevenue = orders.reduce((sum, o) => sum + (parseFloat(o.totalPrice) || 0), 0);
    const pendingOrders = await orderSchema.countDocuments({ paymentStatus: "Pending" });
    const completedOrders = await orderSchema.countDocuments({ paymentStatus: "Completed" });

    res.json({
      success: true,
      data: {
        totalUsers,
        totalProducts,
        totalOrders,
        totalRevenue,
        pendingOrders,
        completedOrders,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch stats" });
  }
});

module.exports = router;
