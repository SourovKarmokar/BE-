const express = require("express")
const app = express()


app.get("/",( req , res )=>{
    res.send("ok cool")
})

const port = 3000 ;

app.listen(port , ()=>{
    console.log("surver is running on port 300");  
})