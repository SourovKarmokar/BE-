const express = require("express");
const authMiddleWare = require("../../middleware/authMiddleware");
const adminMiddleware = require("../../middleware/adminMiddleware");
const router = express.Router();

router.get("/welcome", authMiddleWare , adminMiddleware, (req, res) => {
  res.json({message:"Welcome to admin dashboard"})
});

module.exports = router;
