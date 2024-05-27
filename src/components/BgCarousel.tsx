import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import bock from "../assets/womensday2023_final.png"

import { Autoplay } from "swiper/modules";

const BgCarousel: React.FC = () => {
    const images = [bock];

    return (
        <Swiper
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="flex">
                        <div className=" h-screen  w-full overflow-hidden max-h-screen ">
                            <div className="h-full w-full bg-[#378db540] absolute top-0 left-0 z-50"></div>
                            <img
                                src={image}
                                alt={`img_${index}`}
                                className="h-screen md:w-screen md:h-screen object-cover brightness-60"
                            />
                        </div>

                        <div></div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BgCarousel;
