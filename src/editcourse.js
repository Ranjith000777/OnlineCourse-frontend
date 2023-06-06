import React,{useEffect, useState} from 'react'

import {useNavigate, useParams} from 'react-router-dom';
import img_get from './getcourse-ui.jpg'

import './getcourse.css'
import axios from 'axios';

const EditCourse = (props) => {
  const navigate = useNavigate();
  
  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [gender,setGender] = useState("");
  const [mobile,setMobile] = useState("");
  const [email,setEmail] = useState("");
  const [course,setCourse] = useState("");
  const [graduation,setGraduation] = useState("");
  const [updatedStudentData,setUpdate] = useState([]) ;

  const {id} = useParams()
  const navigateToList = () => {
    navigate('/show');
  };
  const handleClicks = e =>{
    // Edit or update a patient
     // Replace with the actual patient ID
    const updatedStudentData = {name,age,gender,mobile,email,course,graduation}; // Replace with the updated patient data

    fetch(`http://localhost:8080/student/put/${id}`, {
        method: 'PUT', // or 'PATCH' for partial update
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedStudentData),
    })
  .then(response => {
    if (response.ok) {
        alert("updated sucessfully")
        navigate('/show')
    } else {
      alert("error")
      // Handle error logic here
    }
  })
};

  
  return (
    <div className="get-course-container">
      <img src={img_get} alt="" className="get-course-image" />
      <span className="get-course-text">STUDENT MANAGEMENT</span>
      <div className="get-course-container1">
        <span className="get-course-text2">EDIT COURSE</span>
        <input
          type="text"
          placeholder="NAME"
          className="get-course-textinput input"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
          
        />
        <input
          type="text"
          placeholder="AGE"
          className="get-course-textinput1 input"
          value={age}
          onChange={(e) => {setAge(e.target.value)}}
        />
        <input
          type="text"
          placeholder="GENDER"
          className="get-course-textinput2 input"
          value={gender}
          onChange={(e) => {setGender(e.target.value)}}
        />
        <input
          type="text"
          placeholder="MOBILE NO"
          className="get-course-textinput3 input"
          value={mobile}
          onChange={(e) => {setMobile(e.target.value)}}
        />
        <input
          type="text"
          placeholder="E-MAIL"
          className="get-course-textinput4 input"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
        <input
          type="text"
          placeholder="COURSE NAME"
          className="get-course-textinput5 input"
          value={course}
          onChange={(e) => {setCourse(e.target.value)}}
        />
        <input
          type="text"
          placeholder="GRADUATION YEAR"
          className="get-course-textinput6 input"
          value={graduation}
          onChange={(e) => {setGraduation(e.target.value)}}
        />
        <button type="button" className="get-course-button button" onClick={handleClicks}>
          <span>
            <span>EDIT</span>
            <br></br>
          </span>
        </button>
        <button type="button" className="get-course-button1 button" onClick={navigateToList}>
          <span>BACK</span>
        </button>
        
      </div>
    </div>
  )
}

export default EditCourse
