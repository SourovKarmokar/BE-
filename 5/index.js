const express = require("express");
const connectDb = require("./db/connectDb");
const userSchema = require("./model/userSchema");
const app = express();
app.use(express.json());
const bcrypt = require("bcrypt");
const emailVerification = require("./helpers/emailVerification");
const port = 3000;

app.get("/", (req, res) => {
  res.send("ok cool");
});

app.post("/createuser", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  bcrypt.hash(password, 10, function (err, hash) {
      const user = new userSchema({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash,
      });
      user.save();
      emailVerification()

    console.log(hash, "hash");
  });

    res.status(201).json({
      message: "User Create Successfull",
      data: user,
    });
});


connectDb();
app.listen(port, () => {
  console.log("server is runnig");
});
