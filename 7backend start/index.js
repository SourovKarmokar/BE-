require('dotenv').config();
const express = require('express');
const cors = require("cors");
const  route   = require('./route');
const dbConnection = require('./config/dbConnection');
const app = express();
const port = 3000

app.use(express.json());

app.use(cors());
dbConnection();
app.use(route);

app.post("/success", (req, res) => {
  console.log("✅ Payment Success:", req.body);
  res.redirect("http://localhost:5173/paymentsuccess");
});

const path = require('path')
app.use('/upload', express.static(path.join(__dirname, 'upload')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
