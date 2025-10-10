const express = require("express");
const authMiddleWare = require("../../middleware/authMiddleware");
const router = express.Router();

router.get("/welcome", authMiddleWare, (req, res) => {
  
    // Ensure userInfo exists before destructuring
    
   
    
    
    const { userid, firstName, email, role } = req.userInfo;

    console.log(userid , "this is user id");
    

    return res.status(200).json({
      success: true,
      message: "Welcome to user Dashboard",
      data: {
        _id: userid,
        firstName:"ok",
        email:email,
        role:role,
      },
    });
  
   if (!req.userInfo) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access. No user info found.",
      });
    }
});

module.exports = router;
