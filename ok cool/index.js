const express = require("express");
const connectDb = require("./bd/connectDb");
const userSchema = require("./model/userSchema");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

const port = 3000;

connectDb();

app.get("/", (req, res) => {
  res.send("ok cool");
});

app.post("/createUser", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  bcrypt.hash(password, 10, function (err, hash) {
    const user = new userSchema({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hash,
  });
  user.save();
    
  });
  
  res.status(201).json({
    message: "User Create Successfull",
    data: user,
  });
});

app.listen(port, (req, res) => {
  console.log("server is running");
});
