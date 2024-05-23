import React from 'react';
import "../css/home.css";
import timelineImage from '../assets/img/amazon.png';
import timelineImage2 from '../assets/img/google.jpg';
import Image from "../assets/img/madras-high-court-handsketch-watercolor-600nw-2351270087.jpg"
function HistoryTimeLine() {
  
  return (
    <div className= "history_timeline">
      <div  style={{ backgroundImage: `url(${Image})` }} className="section-title">
          <h2>History TimeLine</h2>
          <p>
            PKS is a powerhouse in sports and philanthropy. They host events like
            the Ball Badminton Tournament and support International Women's Day with
            aid for the needy. During crises, they step up, providing substantial
            help during floods, earthquakes, and the Covid-19 pandemic. Their ongoing
            support for medical and educational needs showcases their commitment to
            making a difference in people's lives.
          </p>
        </div>
    <div className="timeline_container left-container">
    <img src={timelineImage2} alt='google'></img>
      <div className="text-box bg-#207893">
        <h2> Alphabet Inc.</h2>
        <small>2018-2019</small>
        <p>The success of every websites depends on search engine optimisation and digital </p>
      <span className='left-container-arrow'></span>
      </div>
    </div>
    <div className="timeline_container right-container">
    <img src={timelineImage} alt='amazon'></img>
      <div className="text-box">
        <h2> Amazon Com.</h2>
        <small>2018-2019</small>
        <p>The success of every websites depends on search engine optimisation and digital </p>
        <span className='right-container-arrow'></span>
      </div>
    </div>
    <div className="timeline_container left-container">
    <img src={timelineImage2} alt='google'></img>
      <div className="text-box">
        <h2> Alphabet Inc.</h2>
        <small>2018-2019</small>
        <p>The success of every websites depends on search engine optimisation and digital </p>
        <span className='left-container-arrow'></span>
      </div>
    </div>
    
    <div className="timeline_container right-container">
    <img src={timelineImage} alt='google'></img>
      <div className="text-box">
        <h2> Amazon Inc.</h2>
        <small>2018-2019</small>
        <p>The success of every websites depends on search engine optimisation and digital </p>
        <span className='right-container-arrow'></span>
      </div>
    </div>
    <div className="timeline_container left-container">
    <img src={timelineImage2} alt='google'></img>
      <div className="text-box">
        <h2> Alphabet Inc.</h2>
        <small>2018-2019</small>
        <p>The success of every websites depends on search engine optimisation and digital </p>
        <span className='left-container-arrow'></span>
      </div>
    </div>
    
    <div className="timeline_container right-container">
    <img src={timelineImage} alt='google'></img>
      <div className="text-box">
        <h2> Amazon Inc.</h2>
        <small>2018-2019</small>
        <p>The success of every websites depends on search engine optimisation and digital </p>
        <span className='right-container-arrow'></span>
      </div>
    </div>
   </div>
   
  )
}

export default HistoryTimeLine;