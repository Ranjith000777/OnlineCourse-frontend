import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import imgs from './login-ui-new.jpg'


import './login.css'

const Login = (props) => {
  const navigate = useNavigate();

  const [admin,setAdmin] = useState()
  const [pass,setPass] = useState()

  const handleLog = () =>{
    if(admin === "admin" && pass === "12345")
    {
      alert("Login Successful")
      navigate('/Home')
    }
    else{
      if(admin === "admin")
      {
        alert("Password is incorrect")
      }
      else if(pass === "12345"){
        alert("Username is incorrect")
      }
      else{
        alert("Username and password is incorrect")
      }
    }
  }

  const handleLogin = () => {
    alert("Login Successfully")
    navigate('/Home') ;
  }
  return (
    <div className="login-container">
      <div className="login-container1">
        <input
          type="text"
          placeholder="USERNAME"
          value={admin}
          onChange={(e) => setAdmin(e.target.value)}
          required
          className="login-textinput input"
        />
        <input
          type="password"
          placeholder="PASSWORD"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
          className="login-textinput1 input"
        />
        <button type="button" className="login-button button" onClick={handleLog}>
          LOG IN
        </button>
        <span className="login-text">ADMIN LOG IN</span>
      </div>
      <img src={imgs} alt='' className="login-image" />
    </div>
  )
}

export default Login

