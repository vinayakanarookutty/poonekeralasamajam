import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from '../assets/img/bg_carousel/bg1.jpg';
import bg2 from '../assets/img/bg_carousel/bg2.jpg';
import bg3 from '../assets/img/bg_carousel/bg3.jpg';
import bg4 from '../assets/img/bg_carousel/bg4.jpg';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const BgCarousel: React.FC = () => {

    const images = [bg1, bg2, bg3, bg4];

    return (
        <Swiper autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
            modules={[Autoplay]}
        >
           {images.map((image, index) => (
    <SwiperSlide key={index}>
        <div className=" h-screen  w-screen overflow-hidden max-h-screen ">
            <div className="h-full w-full bg-[#378db540] absolute top-0 left-0 z-50"></div>
            <img src={image} alt={`img_${index}`} className="h-screen md:w-screen md:h-screen object-cover brightness-50" />
        </div>
    </SwiperSlide>
))}

        </Swiper>
    );
};

export default BgCarousel;
