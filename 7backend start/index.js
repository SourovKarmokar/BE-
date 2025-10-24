require('dotenv').config();
const express = require('express');
const  route   = require('./route');
const dbConnection = require('./config/dbConnection');
const app = express();
const port = 3000

app.use(express.json());

dbConnection();
app.use(route);

const path = require('path')
app.use('/upload', express.static(path.join(__dirname, 'upload')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
