import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const BgCarousel: React.FC = () => {

    const images = [
        '/src/assets/img/bg_carousel/bg1.jpg',
        '/src/assets/img/bg_carousel/bg2.jpg',
        '/src/assets/img/bg_carousel/bg3.jpg',
        '/src/assets/img/bg_carousel/bg4.jpg'
    ];

    return (
        <Swiper autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
            modules={[Autoplay]}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="w-screen overflow-hidden max-h-screen">
                        <div className="h-full w-full bg-[#378db540] absolute top-0 left-0 z-50"></div>
                        <img src={image} alt={`img_${index}`} className="h-screen md:w-screen md:h-auto object-cover brightness-50" />
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    );
};

export default BgCarousel;
