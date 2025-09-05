const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userschema = require("./models/userschema");
app.use(express.json());

const port = 5000;
mongoose.connect('mongodb+srv://mern2406:mern2406cit@cluster0.bd2pycy.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0').then(()=> console.log("mongobd connected "));

app.get("/",(req , res)=>{
    res.send("MERN 2406");
});



app.get("/users",async(req , res)=>{
    const users = await userschema.find();
        res.status(200).json(({
            message:"All users data",
            data:users,
        }));         
    }) 


app.post("/createuser",( req , res)=>{
   console.log(req.body);
   const {firstName,lastName,email,password}=req.body
   const user = new userschema({
    firstName: firstName,
    lastName:lastName,
    email:email,
    password:password,
   })
   user.save()
   res.status(201).json({
    message:"New User Create Successful",
    data:user,
   })
})

app.listen(port, ()=>{
    console.log("Server is running");
    
})