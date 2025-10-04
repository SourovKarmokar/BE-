const emailValidation = require("../helpers/emailValidation");
const emailverification = require("../helpers/emailVeryfication");
const userSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

async function registrationController(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;

    // --- Basic Validations ---
    if (!firstName) {
      return res
        .status(400)
        .json({ success: false, message: "First Name is required" });
    }

    if (!lastName) {
      return res
        .status(400)
        .json({ success: false, message: "Last Name is required" });
    }

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    if (!emailValidation(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }

    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "Password is required" });
    }

    // --- Check for duplicate email ---
    const existingUser = await userSchema.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "Email already registered" });
    }

    // --- Generate OTP ---
    const otp = crypto.randomInt(10000, 99999).toString();
    console.log("Generated OTP:", otp);

    const otpExpire = new Date(Date.now() + 5 * 60 * 1000);
    console.log(otpExpire);

    // --- Hash password ---
    const hashedPassword = await bcrypt.hash(password, 10);

    // --- Create and save user ---
    const user = new userSchema({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
      otp: otp,
      otpExpire: otpExpire,
    });

  
    emailverification(email,otp)

    await user.save();

    // --- Success response ---
    return res.status(201).json({
      success: true,
      message: "Registration successful",
      data: user,
    });
  } catch (err) {
    console.error("Registration Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
}

module.exports = registrationController;
