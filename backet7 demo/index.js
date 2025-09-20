const express = require('express')
const router = require('./router')
const dbConnection = require('./config/dbConnection')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
dbConnection()
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
