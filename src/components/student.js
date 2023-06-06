import React, {useState} from 'react';
import student from './components/student';

import './App.css';

function App() {
  const[id,setId]=useState('')
  const[name,setName]=useState('')
  const[address,setAddress]=useState('')
  const handleClick=(e)=>{
    e.preventDefault()
    const student={id,name,address}
    console.log(student)
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then(()=>{
      console.log("New Student Added")
    })
  }
  const handleUpdate=(e)=>{
    fetch("http://localhost:8080/student/put",{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then(()=>{
      console.log("Student Updated")
    })
  }

  return (
    <div className="App">
      <label>Id</label><br></br>
      <input type='text'
      value={id}
      onChange={(e)=>setId(e.target.value)}></input><br></br>
      <label>Name</label><br></br>
      <input type='text'
      value={name}
      onChange={(e)=>setName(e.target.value)}></input><br></br>
      <label>Address</label><br></br>
      <input type='text'
      value={address}
      onChange={(e)=>setAddress(e.target.value)}></input><br></br>
      <button onClick={handleClick}>Add</button><br></br>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
