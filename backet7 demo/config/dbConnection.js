const mongoose = require('mongoose');
function dbConnection() {
    mongoose.connect('mongodb+srv://mern2406cit:mern2406cit@cluster0.dcobflw.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log("Database Connected"))
;
}


module.exports = dbConnection