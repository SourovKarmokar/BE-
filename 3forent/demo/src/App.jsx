import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [studentData, setStudentData] = useState([]);
  const [ name , setName ] = useState("")
  const [ email , setEmail ] = useState("")
  useEffect(() => {
    axios
      .get("http://localhost:3000/studentinfo")
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [studentData]);

  console.log(studentData);

  const handleCreate = () =>{
    // console.log("ok cool");
    // console.log(email);
    // console.log(name);
    axios.post("http://localhost:3000/createstudentinfo",{
      name: name ,
      email: email,
    })
  }

  return (
    <div>
      <h1>Student Datalist:</h1>

      <div>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' />
        <br />
        <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='email' />
        <br />
        <button onClick={handleCreate}>Create</button>
      </div>

      {studentData.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
