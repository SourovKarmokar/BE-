const express = require("express")
const router = require("./routers")
const dbConnection = require("./config/dbConnection")
const app = express()

const port = 3000 

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello World!")    
})
dbConnection()
app.use(router)

app.listen(port, () =>{
    console.log(`Example are Listen on port ${port}`);   
})