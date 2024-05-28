import React from 'react';
import { Card } from 'flowbite-react';
import "../css/events.css";

interface ThumbnailCardProps {
  items: {
    name: string;
    description: string;
    href: string;
    imgSrc: string;
    subCards?: {
      name: string;
      description: string;
      href: string;
      imgSrc: string;
    }[];
  };
  onClick: () => void;
}

const ThumbnailCard: React.FC<ThumbnailCardProps> = ({ items, onClick }) => {
  return (
    <div className="d-flex px-5 justify-content-center align-items-center notification-cards">
      <div onClick={onClick} className="no-underline" style={{ cursor: 'pointer' }}>
        <Card
          className="max-w-sm"
          imgSrc={items.imgSrc}
          style={{ width: "20rem", backgroundColor: '#6ce4ff' }}
        >
          <h1 className="text-2xl flex flex-col font-bold tracking-tight text-gray-900 dark:text-white">
            {items.name}
          </h1>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {items.description}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ThumbnailCard;
