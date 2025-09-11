const nodemailer = require("nodemailer");
const { default: mongoose } = require("mongoose");

function emailVerification (){
const transporter = nodemailer.createTransport({
  gmail: "email",
  
  auth: {
    user: "sourovkarmokar22@gmail.com",
    pass: "jn7jnAPss4f63QBp6D",
  },
});
}

module.exports = emailVerification;