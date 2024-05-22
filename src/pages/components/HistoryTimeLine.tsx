import React from 'react';
import "../../css/style.css";

function HistoryTimeLine() {
  
  return (
    <div className= "history_timeline">
    <div className="timeline_container left-container">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalcmcanaYko-B2I70L-qa22UnJxVA4PdL_1QfBxQkIg&s' alt='google'></img>
      <div className="text-box">
        <h2> Alphabet Inc.</h2>
        <small>2018-2019</small>
        <p>The success of every websites depends on search engine optimisation and digital </p>
      <span className='left-container-arrow'></span>
      </div>
    </div>
    <div className="timeline_container right-container">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsXT8zCWw30eTRGLF_N1cGtXOvTdHhH9JRYK5rjVnWsA&s' alt='amazon'></img>
      <div className="text-box">
        <h2> Amazon Com.</h2>
        <small>2018-2019</small>
        <p>The success of every websites depends on search engine optimisation and digital </p>
        <span className='right-container-arrow'></span>
      </div>
    </div>
    <div className="timeline_container left-container">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalcmcanaYko-B2I70L-qa22UnJxVA4PdL_1QfBxQkIg&s' alt='google'></img>
      <div className="text-box">
        <h2> Alphabet Inc.</h2>
        <small>2018-2019</small>
        <p>The success of every websites depends on search engine optimisation and digital </p>
        <span className='left-container-arrow'></span>
      </div>
    </div>
    <div className="timeline_container right-container">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsXT8zCWw30eTRGLF_N1cGtXOvTdHhH9JRYK5rjVnWsA&s' alt='amazon'></img>

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