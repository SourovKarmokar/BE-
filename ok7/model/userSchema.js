const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
 firstName:{
    type: String,
    trim:true,
    required:true,
 },
 lastName:{
    type: String,
    trim:true,
    required:true,
 },
 email: {
  type: String,
  trim: true,
  required: true,
  unique: true, 
},
password: {
  type: String,
  required: true,
}
})

module.exports = mongoose.model("userlist",userSchema)