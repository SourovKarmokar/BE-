const userSchema = require("../model/userSchema");
const crypto = require("crypto");
const emailverification = require("../helpers/emailVeryfication");

async function otpController(req, res) {
  try {
    const { email, otp } = req.body;
    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.json({
        error: "User not found"
      });
    }

    if (user.verified) {
      return res.json({
        error: "This email is already verified"
      });
    }

    if (user.otp !== otp || user.otpExpire < Date.now()) {
      return res.json({
        error: "OTP is not valid"
      });
    }

    const userVerify = await userSchema.findOneAndUpdate(
      { email },
      {
        $set: { verified: true },
        $unset: { otp: "", otpExpire: "" }
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Otp Verification "
    });
  } catch (err) {
    console.error("OTP Verification Error:", err);
    return res.status(500).json({
      error: "Internal Server Error"
    });
  }
}

async function resendOtpController(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({
        error: "Email is required"
      });
    }

    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.json({
        error: "This email is not registered"
      });
    }

    const otp = crypto.randomInt(10000, 99999).toString();
    const otpExpire = new Date(Date.now() + 10 * 60 * 1000);

    await userSchema.findOneAndUpdate(
      { email },
      { $set: { otp: otp, otpExpire: otpExpire } },
      { new: true }
    );

    console.log(`[Resend OTP] Generated new OTP for ${email}:`, otp);

    try {
      await emailverification(email, otp);
    } catch (emailErr) {
      console.error("❌ Resend OTP Email Verification failed:", emailErr.message);
    }

    return res.status(200).json({
      success: "OTP send successfully",
      message: "OTP sent successfully"
    });
  } catch (err) {
    console.error("Resend OTP Error:", err);
    return res.status(500).json({
      error: "Internal Server Error"
    });
  }
}

module.exports = { otpController, resendOtpController };