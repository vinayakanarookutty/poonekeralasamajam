import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import TimeLineItem from './TimeLineItems';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PoonemHistory1 from "../../assets/img/PoonemHistory1.jpg"
import poonemhistory2 from "../../assets/img/poonemhistory2.jpg"
import poonemhistory3 from "../../assets/img/PoonemHistory1.jpg"
import { useEffect, useState } from 'react';
const About = () => {

    const [ timelineNavigation, setTimelineNavigation ] = useState(true);

    const timelineItems = [
        {
            image: PoonemHistory1,
            date: 'December 2, 2021',
            title: 'Formation of ‘PKS’',
            desc: 'Get started with dozens of web components and interactive elements.'
        },
        {
            image:poonemhistory2,
            date: 'December 2, 2021',
            title: 'Formation of ‘PKS’',
            desc: 'Get started with dozens of web components and interactive elements.'
        },
        {
            image: poonemhistory3,
            date: 'December 2, 2021',
            title: 'Formation of ‘PKS’',
            desc: 'Get started with dozens of web components and interactive elements.'
        },
        {
            image:poonemhistory2,
            date: 'December 2, 2021',
            title: 'Formation of ‘PKS’',
            desc: 'Get started with dozens of web components and interactive elements.'
        },
        {
            image: PoonemHistory1,
            date: 'December 2, 2021',
            title: 'Formation of ‘PKS’',
            desc: 'Get started with dozens of web components and interactive elements.'
        },
        {
            image: poonemhistory2,
            date: 'December 2, 2021',
            title: 'Formation of ‘PKS’',
            desc: 'Get started with dozens of web components and interactive elements.'
        }
    ]


    useEffect(()=>{

        if(window.innerWidth < 430){
            setTimelineNavigation(false);
        }


    },[])

    return (
        <section id='history' className='h-auto mb-40'>
            <div className='relative w-full' data-carousel="static">
                <div className="history section-title ml-1 md:px-20 lg:px-32 xl:px-40" data-aos="fade-in" data-aos-delay="100">
                    <h2>The History Of Poona Keraleeya Samaj</h2>
                    <p>In pre-Independence days, Pune's population, then called Poona, was around 2 to 3 lakhs, with a small number of Malayalees, mainly bachelors, employed in various Central Government establishments. They lived in areas like Rasta Peth and Kirkee due to affordable lodge-cum-eateries run by Malayalees, offering shared accommodation and meals for less than Rs. 50 per month. Many sent money orders back home to Kerala, supporting their families with their meager salaries. Entertainment or social gatherings were limited due to financial constraints. A few Malayalees conceived the idea of a Malayalee association, leading to the establishment of the 'Poona Keraleeya Samaj' around 1930 </p>
                </div>
                {/* timeline  */}
                <div className='timeline-container px-2 sm:h-15'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        cssMode={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        mousewheel={true}
                        keyboard={true}
                        pagination={{
                            type: 'progressbar',
                        }}
                        navigation={timelineNavigation}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper xl:px-20 w-[80%]"
                    >
                        {timelineItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <TimeLineItem
                                    image={item.image}
                                    date={item.date}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default About;
