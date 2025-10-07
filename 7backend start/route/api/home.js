const express = require("express")
const authMiddleWare = require("../../middleware/authMiddleware")
const router = express.Router()

router.get("/welcome", authMiddleWare ,(req,res)=>{

    console.log(req.userInfo ,"info");
    const {userid, firstName, email , role} = req.userInfo
    return res.status(200).json({
        success: true,
        message: "Welcome to user Dashboard",
        data:{
            _id: userid,
            firstName: firstName,
            email: email,
            role: role,
        }
    })

})





module.exports = router