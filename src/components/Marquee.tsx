import React from 'react';
import "../css/home.css"; 


const Marquee = () => (
  <div className="marquee" onMouseOver={() => pauseMarquee()} onMouseOut={() => startMarquee()}>
    <div className="marquee-content">
    Blood Donation Camp Register Here!&nbsp;&nbsp; | &nbsp;&nbsp;
    Health and Wellness Workshop by Poone Keralasamajam&nbsp;&nbsp; |
    Cultural Showcase by Poone Keralasamajam Delights Audience&nbsp;&nbsp; | &nbsp;&nbsp;
    Cultural Exchange Event Unites Poone Keralasamajam Members&nbsp;&nbsp; | &nbsp;&nbsp;
    Poone Keralasamajam Donates Relief Materials to Flood-Affected Areas&nbsp;&nbsp; | &nbsp;&nbsp;
    </div>
  </div>
);

let animationId;

const pauseMarquee = () => {
  const marquee = document.querySelector('.marquee-content');
  marquee.style.animationPlayState = 'paused';
};

const startMarquee = () => {
  const marquee = document.querySelector('.marquee-content');
  marquee.style.animationPlayState = 'running';
};

export default Marquee;
