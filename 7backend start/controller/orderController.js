const orderSchema = require("../model/orderSchema");
const { ObjectId } = require("mongodb");
const crypto = require("crypto");

const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = "mern2693af6ae125a3";
const store_passwd = "mern2693af6ae125a3@ssl";
const is_live = false;

const createOrderController = async (req, res) => {
  try {
    const randomBytes = crypto.randomBytes(12);
    const tran_id = new ObjectId(randomBytes).toString();

    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      postcode,
      totalPrice,
      products,
    } = req.body;

    const data = {
      total_amount: totalPrice,
      currency: "BDT",
      tran_id: tran_id,
      success_url: "http://localhost:3000/success",
      fail_url: "http://localhost:3000/fail",
      cancel_url: "http://localhost:3000/cancel",
      ipn_url: "http://localhost:3000/ipn",
      shipping_method: "Courier",
      product_name: "Computer.",
      product_category: "Electronic",
      product_profile: "general",
      cus_name: `${firstName} ${lastName}`,
      cus_email: email,
      cus_add1: address,
      cus_add2: address,
      cus_city: city,
      cus_state: city,
      cus_postcode: postcode,
      cus_country: "Bangladesh",
      cus_phone: phone,
      cus_fax: phone,
      ship_name: `${firstName} ${lastName}`,
      ship_add1: address,
      ship_add2: address,
      ship_city: city,
      ship_state: city,
      ship_postcode: postcode,
      ship_country: "Bangladesh",
    };

    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const apiResponse = await sslcz.init(data);

    if (!apiResponse.GatewayPageURL) {
      return res.status(400).json({
        success: false,
        message: "Payment gateway initialization failed",
        error: apiResponse,
      });
    }

    const GatewayPageURL = apiResponse.GatewayPageURL;

    const orderData = new orderSchema({
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      postcode,
      totalPrice,
      products,
      transactionId: tran_id,
      paymentStatus: "Pending",
    });

    await orderData.save();

    return res.status(201).json({
      success: true,
      message: "Order Created Successfully",
      data: orderData,
      gatewayPageURL: GatewayPageURL,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error.message,
    });
  }
};

const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderSchema.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: "All orders fetched successfully",
      data: orders,
      total: orders.length,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};

const updateOrderStatusController = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;
    const order = await orderSchema.findByIdAndUpdate(
      id,
      { $set: { paymentStatus } },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Order status updated",
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update order status",
      error: error.message,
    });
  }
};

module.exports = {
  createOrderController,
  getAllOrdersController,
  updateOrderStatusController,
};
