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
  "api2406mern",
  {
    expiresIn: "10m"
  }
);

     if (!isMatched) {
    res.json({ error: "Password is not match" });
  } else {
    res.json({
      Success: "Login Successfully done",
      accessToken: accessToken
    });
  }


}

module.exports = loginController;
