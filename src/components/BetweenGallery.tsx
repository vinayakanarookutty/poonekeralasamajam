import React, { useState } from 'react';
import 'swiper/css';
import "../css/notification.css";
import ThumbnailCard from './ThumbnailCard';
import BreadCrump from './ui/BreadCrump';
import img1 from "../assets/img/gallery/prize_dis.jpg";
import img2 from "../assets/img/gallery/prize_dis.jpg";
import img3 from "../assets/img/gallery/prize_dis.jpg";

interface Card {
  name: string;
  description: string;
  href: string;
  imgSrc: string;
  subCards?: Card[];
}

const initialCardData: Card[] = [
  {
    name: "Arts",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: img1,
    href: "/moregallery",
    subCards: [
      {
        name: "Painting",
        description: "Various styles of painting.",
        imgSrc: img1,
        href: "/moregallery"
      },
      {
        name: "Sculpture",
        description: "Intricate sculptures.",
        imgSrc: img1,
        href: "/moregallery"
      },
      {
        name: "Cinema",
        description: "Various styles of painting.",
        imgSrc: img1,
        href: "/moregallery"
      },
      {
        name: "Dance",
        description: "Intricate sculptures.",
        imgSrc: img1,
        href: "/moregallery"
      }
    ]
  },
  {
    name: "Sports",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: img2,
    href: "/moregallery",
    subCards: [
      {
        name: "Football",
        description: "All about football.",
        imgSrc: img2,
        href: "/moregallery"
      },
      {
        name: "Basketball",
        description: "All about basketball.",
        imgSrc: img2,
        href: "/moregallery"
      },
      {
        name: "Cricket",
        description: "All about basketball.",
        imgSrc: img2,
        href: "/moregallery"
      }
    ]
  },
  {
    name: "Celebration",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: img3,
    href: "/moregallery",
    subCards: [
      {
        name: "Festival",
        description: "Cultural festivals.",
        imgSrc: img3,
        href: "/moregallery"
      },
      {
        name: "Parade",
        description: "Grand parades.",
        imgSrc: img3,
        href: "/moregallery"
      }
    ]
  },
];

const BetweenGallery: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (card: Card) => {
    if (card.subCards && card.subCards.length > 0) {
      setSelectedCard(card.name === selectedCard ? null : card.name);
    } else {
      window.location.href = card.href;
    }
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
    return card?.subCards ? renderCards(card.subCards) : null;
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', padding: '20px' }}>
      <div className="flex justify-start mt-5" style={{paddingLeft:"7%"}}>
        <BreadCrump items={["Gallery"]} />
      </div>
      <section style={{backgroundColor: 'white'}} className="notifications-container">
        <h2 className='bgallerytitle'>Welcome to PKS Gallery</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="notification-content">
            {selectedCard ? renderNestedCards() : renderCards(initialCardData)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BetweenGallery;
