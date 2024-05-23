import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../css/home.css";

const cardData = [
  {
    name: "Arts",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg"
  },
  {
    name: "Sports",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg"
  },
  {
    name: "Celebration",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg"
  },  
  {
    name: "Arts",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/arts.jpg"
  },
  {
    name: "Sports",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg"
  },
  {
    name: "Celebration",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/onam1.jpg"
  },
  {
    name: "Jenny Wert",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "assets/img/avatar-4.png"
  },
  {
    name: "Lexa Kin",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "assets/img/avatar-5.png"
  }
];

const BetweenGallery: React.FC = () => {
  return (
    <section className="container37 h-screen ">
      <div className="card__container mt-[15%]">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <article className="card__article">
                <div className="card__image">
                  <img src={card.imgSrc} alt="image" className="card__img" />
                  <div className="card__shadow"></div>
                </div>
                <div className="card__data">
                  <h3 className="card__name">{card.name}</h3>
                  <p className="card__description">{card.description}</p>
                  <a href="#" className="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default BetweenGallery;
