import { CCarousel, CCarouselItem , CImage } from '@coreui/react'

const BgCarousel: React.FC = () => {

    const images = [
        '/src/assets/img/bg_carousel/bg1.jpg',
        '/src/assets/img/bg_carousel/bg2.jpg'
    ];

    return (
        <CCarousel  className={`absolute h-screen top-0 w-[200vw] flex overflow-scroll`}>
            {images.map((image, index) => (
                <CCarouselItem key={index} id={`bg-carousel-${index}`} className={`h-full w-screen`}>
                    <CImage src={image} alt={`img_${index}`} className="h-full w-full object-cover" />
                </CCarouselItem>
            ))}

        </CCarousel>
    );
};

export default BgCarousel;
