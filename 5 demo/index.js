const exprss = require("express");
const connectDb = require("./db/connectDb");
const userSchema = require("./model/userSchema");
const bcrypt = require("bcrypt");
const app = exprss();
app.use(exprss.json());
const port = 3000;
connectDb();

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
    
  });

  

//   res.status(201).json({
//     message: "user create successfull",
//     data: user,
//   });
});

app.listen(port, () => {
  console.log("Server is running");
});
