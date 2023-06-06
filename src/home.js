import React from 'react'
import {useNavigate} from 'react-router-dom';
import imgs_home from './home-ui.jpg'

import './home.css'

const Home = (props) => {
  const navigate = useNavigate();

  const navigateToCourse = () => {
    navigate('/getcourse');
  };
  const navigateToList = () => {
    navigate('/show');
  };
  const navigateToLogin = () => {
    navigate('/');
  };
  return (
    <div className="home-container">
      <div className="home-container1">
        <span className="home-text">REGISTERING COURSE</span>
        <label className="home-text01">
          <span>Here you can register the course. You must enter your </span>
          <span>details correctly otherwise, your application will</span>
          <br></br>
          <span>be rejected. So, Give the correct details.</span>
          <br></br>
        </label>
        <button type="button" className="home-button button" onClick={navigateToCourse}>
          <span>
            <span>APPLY</span>
            <br></br>
          </span>
        </button>
      </div>
      <button type="button" className="home-button1 button" onClick={navigateToLogin}>
        <span>
          <span>LOG OUT</span>
          <br></br>
        </span>
      </button>
      <button type="button" className="home-button2 button" onClick={navigateToList}>
        <span>STUDENT DETAILS</span>
      </button>
      <span className="home-text14">STUDENT MANAGEMENT</span>
      <img alt='' src={imgs_home} className="home-image" />
    </div>
  )
}

export default Home
