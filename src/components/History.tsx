import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import TimeLineItem from './TimeLineItems';
import {  Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import pooneHistory1 from "../assets/img/History/PoonemHistory1.jpg"
import pooneHistory2 from "../assets/img/History/poonehistory2001.jpg"
import pooneHistory3 from "../assets/img/History/poonemhistory2.jpg"
import pooneHistory4 from "../assets/img/History/annualday2008.jpg"
import pooneHistory5 from "../assets/img/pks_bckgrnd.jpg"
import pooneHistory6 from "../assets/img/History/womensday2023.jpg"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    

    const [timelineNavigation, setTimelineNavigation] = useState(true);

    const timelineItems = [
        {
            image: pooneHistory1,
            date: '1964',
            title: 'Formation of ‘PKS’',
            desc: "In the past, Central Government employees in Pune earned less than Rs.100 per month. Many Malayalees in Pune sent money home to Kerala, leaving little for entertainment. Lacking a common place to socialize, some decided to form the 'Poona Keraleeya Samaj' in late 1930 at 356, Rasta Peth. Later, the group split into 'East Poona Kerala Samaj' in Kirkee and 'Poona Keraleeya Samaj' at Rasta Peth. In 1944, Poona Keraleeya Samaj was registered as a charitable and social organization"
        },
        {
            image: pooneHistory2,
            date: '2001',
            title: '2001 event Felicitation of Padmashree Mohanlal',
            desc: "The Poona Keraleeya Samaj organized a grand felicitation event to honor the renowned actor Padmashree Mohanlal. This celebration recognized Mohanlal's outstanding contributions to Indian cinema and his exceptional talent. The event was a significant occasion for the Malayalee community in Pune, providing an opportunity to celebrate one of their most illustrious cultural icons. The gathering was marked by heartfelt speeches, cultural performances, and a deep sense of pride and admiration for Mohanlal's achievements"
        },
        {
            image: pooneHistory3,
            date: '2007',
            title: '2007 Onam Celebration',
            desc: "The Poona Keraleeya Samaj organized a vibrant Onam celebration, bringing together the Malayalee community in Pune for a day of cultural festivity and joy. The event featured traditional Onam rituals, a grand feast (Onam Sadhya), and a variety of cultural performances including music, dance, and traditional games. The celebration showcased the rich heritage and customs of Kerala, fostering a sense of unity and nostalgia among the attendees. It was a memorable occasion filled with laughter, camaraderie, and the shared joy of the harvest festival"
        },
        {
            image: pooneHistory4,
            date: '2008',
            title: '2008 Anniversary And Onam Celebration',
            desc: "The Poona Keraleeya Samaj hosted a grand event combining their Annual Day and Onam celebration, emphasizing both the community’s achievements and cultural heritage. The Annual Day segment recognized notable contributions from members, celebrated milestones, and highlighted the Samaj’s initiatives and successes over the past year. This was followed by the vibrant Onam festivities, featuring traditional dances, music, skits, and a sumptuous Onam Sadhya feast. The event was a joyful fusion of reflection and celebration, strengthening community bonds and honoring Kerala’s rich cultural traditions"
        },
        {
            image: pooneHistory5,
            date: '2022',
            title: '2022 Anniversary And Onam Celebration',
            desc: "The Poona Keraleeya Samaj's Annual Day and Onam celebration was a grand affair, marked by the presence of distinguished guests, including cine artist Arjun Radhakrishnan and Health Minister Shailaja. The Annual Day segment honored the community's achievements and showcased notable contributions from its members over the past year. The Onam festivities were equally vibrant, featuring traditional dances, music, skits, and the delectable Onam Sadhya feast. The presence of the esteemed guests added to the event's prestige, making it a memorable occasion that celebrated both community accomplishments and the rich cultural heritage of Kerala.s"
        },
        {
            image: pooneHistory6,
            date: '2023',
            title: '2023 Womens Day Celebration',
            desc: "The Poona Keraleeya Samaj organized a special Women's Day celebration, graced by the esteemed presence of cine artist Sreelatha Namboothiri. The event highlighted the empowerment and achievements of women within the community through inspiring speeches and cultural performances. As part of their commitment to social welfare, the Samaj also conducted charitable activities, distributing wheelchairs, clothing, and other essential resources to those in need. This celebration not only honored women's contributions but also reinforced the Samaj's dedication to community service and support"
        },
      
    ]


    useEffect(() => {
        if (window.innerWidth < 430) {
            setTimelineNavigation(false);
        }
    }, [])

    return (
        <section id='history' className='h-auto pt-5'>
            <div className='relative w-full' data-carousel="static">
                <div className="history section-title ml-1 md:px-20 lg:px-32 xl:px-40" data-aos="fade-in" data-aos-delay="100">
                    <h2>The History Of Poona Keraleeya Samaj</h2>
                    <p>In pre-Independence days, Pune's population, then called Poona, was around 2 to 3 lakhs, with a small number of Malayalees, mainly bachelors, employed in various Central Government establishments. They lived in areas like Rasta Peth and Kirkee due to affordable lodge-cum-eateries run by Malayalees, offering shared accommodation and meals for less than Rs. 50 per month. Many sent money orders back home to Kerala, supporting their families with their meager salaries. Entertainment or social gatherings were limited due to financial constraints. A few Malayalees conceived the idea of a Malayalee association, leading to the establishment of the 'Poona Keraleeya Samaj' around 1930 </p>
                </div>
                {/* timeline  */}
                <div className='grid place-items-center w-screen'>
                    <div className='timeline-container px-2 sm:h-15 '>
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
                            navigation={timelineNavigation}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper xl:px-20 w-[90%]"
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
            </div>
            <div className="text-right">
          <Link to="/history" className="btn btn-primary mr-5 text-xs py-1 px-2">See More</Link>
        </div>
        </section>
    );
}

export default About;
