import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../css/home.css";


import img1 from '../../assets/img/gallery/clb1.jpg';
import img2 from '../../assets/img/gallery/clb2.jpg';
import img3 from '../../assets/img/gallery/onam.jpg';
import img4 from '../../assets/img/gallery/onam1.jpg';
import img5 from '../../assets/img/gallery/prize_dis.jpg';

interface ImageData {
  src: string;
  category: string;
}

const images: ImageData[] = [
  { src: img1, category: 'nature' },
  { src: img2, category: 'city' },
  { src: img3, category: 'nature' },
  { src: img4, category: 'animals' },
  { src: img5, category: 'city' },
  { src: img1, category: 'nature' },
  { src: img2, category: 'city' },
  { src: img3, category: 'nature' },
  { src: img4, category: 'animals' },
  { src: img5, category: 'city' },
];

const categories = ['all', 'nature', 'city', 'animals'];

const MoreGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="container23">
      <h1 className="heading23">Image Gallery</h1>
      <div className="filter-buttons23">
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container23"
      >
        {filteredImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={`slide_image_${index + 1}`} />
          </SwiperSlide>
        ))}
        <div className="slider-controler23">
          <div className="swiper-button-prev slider-arrow23">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          <div className="swiper-button-next slider-arrow23">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          <div className="swiper-pagination23"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default MoreGallery;
