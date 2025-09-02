const express = require('express')
const app = express()
const port = 3000
const studentInfo = [
    {
        "name": "sourov",
        "email": "sourov@gamil.com"
    },
    {
        "name": "sajal",
        "email": "sajal@gamil.com"
    },
    {
        "name": "hazra",
        "email": "hazra@gamil.com"
    },
]

app.get('/studentinfo', (req, res) => {
  res.send(studentInfo)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
