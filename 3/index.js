const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
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
  res.send(studentInfo);

})

app.post("/createstudentinfo", (req,res)=>{
    console.log(req.body); 
    const newStudent = req.body;
    console.log(newStudent);
    studentInfo.push(newStudent)  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
