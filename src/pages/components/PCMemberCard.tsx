import React from "react";

interface PCMemberCardProps {
  image: string;
  name: string;
  position: string;
  phone: string;
}

const PCMemberCard: React.FC<PCMemberCardProps> = ({ image, name, position, phone }) => {
  return (
    <div className="grid place-items-center gap-2">
      <div className="aspect-square w-[200px] overflow-hidden rounded-full">
        <img src={image} alt="" className="object-cover" />
      </div>
      <p className="font-bold text-xl">{name}</p>
      <div className="text-slate-500 text-sm">
        <p>{position} </p>
        <p> {phone}</p>
      </div>
    </div>
  );
}

export default PCMemberCard;
