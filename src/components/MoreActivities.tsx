import React, { useState ,useEffect} from 'react';
import 'swiper/css';
import "../css/notification.css";
import ThumbnailCard from './ThumbnailCard';
import BreadCrump from './ui/BreadCrump';
import img1 from "../assets/img/gallery/Thiru1.jpg";
import img2 from "../assets/img/womensday2023.jpg";
import img3 from "../assets/img/gallery/clb.jpg";
import img4 from "../assets/img/Events/onam3.jpg";
import { Button } from "flowbite-react";
interface Card {
  name: string;
  description: string;
  href: string;
  imgSrc: string;
  subCards?: Card[];
}

const initialCardData: Card[] = [
  {
    name: "Sports and games",
    description: "PKS has always been at the forefront of promoting sports, hosting diverse competitions like the annual Ball Badminton Tournament for the Krishna Kumar Memorial Trophy",
    imgSrc: img1,
    href: "/activities?head=Sports",
  },
  {
    name: "Women's Days",
    description: "During its International Women’s Day Celebration every year in March, it has been helping the poor with clothes and other needy items, besides wheelchairs to the ‘divyang’ persons.",
    imgSrc: img2,
    href: "/activities?head=Women's Day",
  },
  {
    name: "Philanthropic Activities",
    description: "PKS is a leading force in philanthropy, offering substantial aid during crises. It provided Rs 5 lakhs in support to Kerala during the 2018 and 2019 floods, and during the challenging Covid-19 pandemic.",
    imgSrc: img3,
    href: "/activities?head=Philanthropic Activities", 
  },
  {
    name: "Cultural Events",
    description: "(PKS) is a vibrant organization dedicated to preserving and promoting the rich cultural heritage of Kerala among the Keralite community residing in Pune. PKS organizes a variety of cultural events",
    imgSrc: img4,
    href: "/activities?head=Sports", 
  },
];

const MoreActivities: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleCardClick = (card: Card) => {
    if (card.subCards && card.subCards.length > 0) {
      setSelectedCard(card.name === selectedCard ? null : card.name);
    } else {
      window.location.href = card.href;
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filterCards = (cards: Card[]) => {
    return cards.filter(card => 
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (card.subCards && card.subCards.some(subCard => 
        subCard.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subCard.description.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    );
  };

  const renderCards = (cards: Card[]) => {
    return cards.map((items, index) => (
      <ThumbnailCard 
        key={index} 
        items={items} 
        onClick={() => handleCardClick(items)} 
      />
    ));
  };

  const renderNestedCards = () => {
    const card = initialCardData.find(card => card.name === selectedCard);
    return card?.subCards ? renderCards(filterCards(card.subCards)) : null;
  };
  const filteredCards = filterCards(initialCardData);
  return (
    <div className="bg-white min-h-screen p-5  ">
      <div className="flex justify-start mt-5 pl-7">
        <BreadCrump items={["More-Activities"]} />
      </div>
      <section className="notifications-container bg-white">
        <h2 className="bgallerytitle text-center text-2xl md:text-4xl lg:text-5xl">Welcome to PKS Activities</h2>
        <div  style={{display:'flex', gap:'10px',padding:"2%"}}>
      
        <input 
            className='searchitem p-2 border rounded w-full' 
            type="text" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={handleSearchChange}
          />
        <Button color="gray">Search</Button>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="notification-content grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {selectedCard ? renderNestedCards() : renderCards(filteredCards)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreActivities;





















// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';
// import BreadCrump from './ui/BreadCrump';

// function MoreActivities() {
//   useEffect(() => {
//     AOS.init(); 
//     window.scrollTo(0, 0);src/components/BetweenGallery.tsx
//   }, []);

//   const activities = [
//     {
//         title: "Sports and games",
//         description: "PKS has always been at the forefront of promoting sports, hosting diverse competitions like the annual Ball Badminton Tournament for the Krishna Kumar Memorial Trophy, honoring a cherished member. Talented Ball Badminton players once graced PKS, their legacy enduring despite their absence. Today, PKS continues its tradition with a grand Annual Sports Meet during Onam, blending celebration and athleticism seamlessly.",
//         buttonText: "See more",
//         link: "/activities?head=Sports"
//     },
//     {
//       title: "Women's Days",
//       description: "During its International Women’s Day Celebration every year in March, it has been helping the poor with clothes and other needy items, besides wheelchairs to the ‘divyang’ persons.",
//       link: "/activities?head=Women's Day",
//       buttonText: "See more",
//     },
//     {
//       title: "Philanthropic Activities",
//       description: "PKS is a leading force in philanthropy, offering substantial aid during crises. It provided Rs 5 lakhs in support to Kerala during the 2018 and 2019 floods, and during the challenging Covid-19 pandemic. It also extended significant assistance during earthquakes in Gujarat and Latur (Maharashtra). Additionally, PKS supplied hundreds of tankers of drinking water to drought-affected villages in Maharashtra.",
//       link: "/activities?head=Philanthropic Activities",
//       buttonText: "See more",
//     },
//     {
//         title: "Cultural Events",
//         description: "PKS regularly organizes cultural events to celebrate the rich heritage and traditions of our community. Annual festivals, music concerts, dance performances, and art exhibitions are some of the highlights.",
//         link: "/activities?head=Cultural",
//         buttonText: "See more",
//     },
    
// ];

//   return (
//     <div style={{ backgroundColor: 'white', minHeight: '100vh', padding: '20px' }}>
//       <div className="flex justify-start mt-5 " style={{paddingLeft:"7%"}}>
//         <BreadCrump items={["More-Activities"]} />
//       </div>
//       <section id="services" className="services">
//         <div className="container">
//           <div className="section-title">
//             <h2 style={{fontWeight:"700"}}>Activities</h2>
//             <p style={{fontWeight:"700",paddingTop:"2%"}}>
//               PKS is a powerhouse in sports and philanthropy. They host events like
//               the Ball Badminton Tournament and support International Women's Day with
//               aid for the needy. During crises, they step up, providing substantial
//               help during floods, earthquakes, and the Covid-19 pandemic. Their ongoing
//               support for medical and educational needs showcases their commitment to
//               making a difference in people's lives.
//             </p>
//           </div>
//           <div className="row mt-5 ">
//             {activities.map((activity, index) => (
//               <div key={index} className="col-md-12  col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 p-3">
//                 <div className="icon-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
//                   <div>
//                     <div className="icon"><i className="bx bxl-dribbble"></i></div>
//                     <h4 className="title">{activity.title}</h4>
//                     <p className="description">{activity.description}</p>
//                   </div>
//                   {activity.buttonText && activity.link && (
//                     <div style={{ marginTop: 'auto' }}>
//                       <Link to={activity.link}>
//                         <button className="btn btn-primary">{activity.buttonText}</button>
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default MoreActivities;