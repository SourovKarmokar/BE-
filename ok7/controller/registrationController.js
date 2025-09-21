const userSchema = require("../model/userSchema");

function registrationControllere(req,res) {
 console.log(req.body);
 const {firstName,lastName,email,password} = req.body;
 const user = new userSchema({
    firstName : firstName,
    lastName : lastName,
    email: email,
    password :password,
 })
 user.save();

 res.status(201).json({
    message: "Registration Done",
    data: user,
 })

}
module.exports = registrationControllere