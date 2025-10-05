const { error } = require("console");
const userSchema = require("../model/userSchema")
const crypto = require("crypto")

async function otpController(req,res){

    const {email,otp} = req.body
    const user = await userSchema.findOne({email})
    console.log(user);
    if(user.verified){
        res.json({
            error: "This email is already verified"
        });
    }

    if(user.otp != otp || user.otpExpire < Date.now()){
        res.json({
            error: "OTP is not valid"
        });
    }

    const userVerify = await userSchema.findOneAndUpdate(
        {email},
        {$set:{verified:true },
        $unset:{otp:"", otpExpire:""}    
        },
        {
            new: true
        }
    )
}


async function resendOtpController(req,res){
    console.log("ok cool");
    const {email}= req.body
    console.log(email);
    if(!email){
        return res.json({
            error: "Email is required"
        })
    }
    const users = await userSchema.findOne({email})

    const otp = crypto.randomInt(10000 , 99999).toString()
    const otpExpire = new Date(Date.now() + 10 *60*1000)

    if(!users){
        res.json({
         error:"This emaill is not registered"
        })
    }else{
        const user = userSchema.findOneAndUpdate(
        {
            email
        },
        {
            $set:{otp:otp ,otpExpire:otpExpire}
        },
        {
            new:true
        }

    )
    }

    
    res.status(200).json({
        success: "OTP send successfully"
    })
}

module.exports = {otpController , resendOtpController};