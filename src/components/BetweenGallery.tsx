import React from 'react';
import 'swiper/css';

import "../css/notification.css";
import ThumbnailCard from './ThumbnailCard';

const cardData = [
  {
    name: "Arts",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg",
    href: "/gallery"
  },
  {
    name: "Sports",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg",
    href: "/gallery"
  },
  {
    name: "Celebration",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg",
    href: "/gallery"
  },  
  {
    name: "Arts",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg",
    href: "/gallery"
  },
  {
    name: "Sports",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg",
    href: "/gallery"
  },
  {
    name: "Celebration",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg",
    href: "/gallery"
  },
];

const BetweenGallery: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#6ce4ff', minHeight: '100vh', padding: '20px' }}>
      <section style={{backgroundColor: '#6ce4ff'}}  className="notifications-container">
        {/* <div  className="section-title"> */}
          <h2 className='bgallerytitle'>Welcome to PKS Gallery</h2>
        {/* </div> */}
        <div className="d-flex justify-content-center align-items-center">
          <div className="notification-content">
            {cardData.map((items, index) => (
              <ThumbnailCard key={index} items={items} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BetweenGallery;
