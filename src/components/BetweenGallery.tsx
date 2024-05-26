import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../css/home.css";
import "../css/notification.css"
import Image from "../assets/img/madras-high-court-handsketch-watercolor-600nw-2351270087.jpg"
import ThumbnailCard from './ThumbnailCard';
import "../css/events.css"
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
const data = cardData;

const BetweenGallery: React.FC = () => {
  return (
    <section className="notifications-container ">
      <div   className="section-title">
          <h2>Thumbnails</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center">
                    <div className="notification-content ">
                        {data.map((items) => (
                            <ThumbnailCard items={items} />
                        ))}
                    </div>
                </div>
    </section>
  );
};

export default BetweenGallery;
