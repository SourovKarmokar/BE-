const emailValidation = require("../helpers/emailValidation");
const userSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

async function loginController(req, res) {
  const { email, password } = req.body;

  if (!email) {
    return res.json("Email is Required");
  }
  if (!emailValidation(email)) {
    return res.json("Give a valid Email");
  }
  if (!password) {
    return res.json("Password is Required");
  }

  const existingUser = await userSchema.findOne({ email });

  if (!existingUser) {
    return res.json({ error: "This email is not registered" });
  }

  if (!existingUser.verified) {
    return res.json({ error: "This email is not verified" });
  }

  if (!existingUser.password) {
    return res.json({
      error:
        "Cannot complete login: Password data is missing for this account.",
    });
  }

  const isMatched = await bcrypt.compare(password, existingUser.password);

 

  const accessToken = jwt.sign({
    userid: existingUser._id,
    firstname: existingUser.firstName,
    email: existingUser.email,
    role: existingUser.role
  },
  process.env.JWT_SECRET || "api2406mern",
  {
    expiresIn: "7d"
  }
);

     if (!isMatched) {
    return res.status(401).json({ success: false, error: "Password is not match" });
  } else {
    return res.status(200).json({
      success: true,
      message: "Login Successfully done",
      accessToken: accessToken,
      user: {
        id: existingUser._id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        role: existingUser.role
      }
    });
  }


}

module.exports = loginController;
