const mongoose = require("mongoose");

function connectDb(){
    mongoose
    .connect('mongodb+srv://mern2406:mern2406cit@cluster0.bd2pycy.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log("Database Connected"));
}
module.exports = connectDb;