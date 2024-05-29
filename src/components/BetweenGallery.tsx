import React, { useState ,useEffect} from 'react';
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
    <div className="bg-white min-h-screen p-5 ">
      <div className="flex justify-start mt-5 pl-7">
        <BreadCrump items={["Gallery"]} />
      </div>
      <section className="notifications-container bg-white">
        <h2 className="bgallerytitle text-center text-2xl md:text-4xl lg:text-5xl">Welcome to PKS Gallery</h2>
        <div className="flex justify-center items-center">
          <div className="notification-content grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {selectedCard ? renderNestedCards() : renderCards(initialCardData)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BetweenGallery;