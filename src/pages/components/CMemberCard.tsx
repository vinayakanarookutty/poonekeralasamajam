import React from "react";

interface SocialLinks {
  twitter?: string;
  fb?: string;
  inst?: string;
  linkedin?: string;
}

interface MemberCardProps {
  image: string;
  name: string;
  position: string;
  social: SocialLinks;
}

const MemberCard: React.FC<MemberCardProps> = ({ image, name, position, social }) => {
  return (
    <div className="px-10">
      <div className="member" data-aos="fade-up">
        <div className="pic">
          <img
            src={image}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          <span>{position}</span>
          <div className="social">
            <a href={social?.twitter}>
              <i className="bi bi-twitter"></i>
            </a>
            <a href={social?.fb}>
              <i className="bi bi-facebook"></i>
            </a>
            <a href={social?.inst}>
              <i className="bi bi-instagram"></i>
            </a>
            <a href={social?.linkedin}>
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
