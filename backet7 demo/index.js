require('dotenv').config()
const express = require('express')
const router = require('./router')
const dbConnection = require('./config/dbConnection')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
dbConnection()
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
