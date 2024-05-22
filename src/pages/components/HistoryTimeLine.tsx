import React from 'react';
import "../../css/home.css";
import timelineImage from '../../assets/img/amazon.png';
import timelineImage2 from '../../assets/img/google.jpg';

function HistoryTimeLine() {
  
  return (
    <div className= "history_timeline">
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