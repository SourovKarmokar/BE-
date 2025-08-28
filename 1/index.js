const express = require("express")

const app = express()

app.get("/" ,(req , res)=>{
 res.send("ok cools")
})

app.listen(3000 , () =>{
    console.log("i am running");
    
})