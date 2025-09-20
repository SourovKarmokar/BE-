const emailValidation = require("../helpers/emailValidation");
const userSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");

async function registrationController(req,res){
console.log(req.body);
const {firstName, lastName ,email,password} = req.body
if(!firstName){
    return res.json("First Name is Require")
}
if(!lastName){
    return res.json("Last Name is Required")
}
if(!email){
    return res.json("Email is Required")
}
if(!emailValidation(email)){
    return res.json("Please Give Me Valid Email")
}
if(!password){
    return res.json("Password is Required")
}
bcrypt.hash(password, 10 , function(err, hash) {
    const user = new userSchema({
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:hash,
})


  user.save()

res.status(201).json({
      message: "Registration Successful",
      data: user,
    });
    
});

}


module.exports =registrationController