import React,{useEffect, useState} from 'react'

import {useNavigate} from 'react-router-dom';
import img_get from './getcourse-ui.jpg'

import './getcourse.css'

const GetCourse = (props) => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/Home');
  };
  const[name,setName]=useState('')
  const[age,setAge]=useState('')
  const[gender,setGender]=useState('')
  const[mobile,setMobile]=useState('')
  const[email,setEmail]=useState('')
  const[course,setCourse]=useState('')
  const[graduation,setGraduation]=useState('')
  const[students,setStudents]=useState([]) ;
  
  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,age,gender,mobile,email,course,graduation}
    console.log(student)
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then(()=>{
      console.log("New Student Added")
    })
    alert("Course Registered Successfully")
    navigate('/Home')
  }
  
  useEffect(()=>{
    fetch("http://localhost:8080/student/get")
    .then(res => res.json())
    .then((result)=>{
      setStudents(result) ;
    }
  )
  },[])
  return (
    <div className="get-course-container">
      <img src={img_get} alt="" className="get-course-image" />
      <span className="get-course-text">STUDENT MANAGEMENT</span>
      <div className="get-course-container1">
        <span className="get-course-text1">COURSE REGISTRATION</span>
        <input
          type="text"
          placeholder="NAME"
          className="get-course-textinput input"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="AGE"
          className="get-course-textinput1 input"
          value={age}
      onChange={(e)=>setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="GENDER"
          className="get-course-textinput2 input"
          value={gender}
      onChange={(e)=>setGender(e.target.value)}
        />
        <input
          type="text"
          placeholder="MOBILE NO"
          className="get-course-textinput3 input"
          value={mobile}
      onChange={(e)=>setMobile(e.target.value)}
        />
        <input
          type="text"
          placeholder="E-MAIL"
          className="get-course-textinput4 input"
          value={email}
      onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="COURSE NAME"
          className="get-course-textinput5 input"
          value={course}
      onChange={(e)=>setCourse(e.target.value)}
        />
        <input
          type="text"
          placeholder="GRADUATION YEAR"
          className="get-course-textinput6 input"
          value={graduation}
      onChange={(e)=>setGraduation(e.target.value)}
        />
        <button type="button" className="get-course-button button" onClick={handleClick}>
          <span>
            <span>REGISTER</span>
            <br></br>
          </span>
        </button>
        <button type="button" className="get-course-button1 button" onClick={navigateToHome}>
          <span>BACK</span>
        </button>
        
      </div>
    </div>
  )
}

export default GetCourse
