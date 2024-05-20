import React from 'react';

interface MemberProps {
  imgSrc: string;
  name: string;
  title: string;
  delay: number;
}

const Member: React.FC<MemberProps> = ({ imgSrc, name, title, delay }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="member" data-aos="fade-up" data-aos-delay={delay}>
        <div className="pic">
          <img src={imgSrc} className="img-fluid" alt={name} />
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          <span>{title}</span>
          <div className="social">
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommitteeMembers: React.FC = () => {
  return (
    <section id="team" className="team">
      <div className="container">

        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Committee Members</h2>
        </div>

        <div className="row">
          <Member 
            imgSrc="src/assets/img/c_members/Anil-George.jpg" 
            name="Anil George" 
            title="Executive Committee Member" 
            delay={0} 
          />
          <Member 
            imgSrc="src/assets/img/c_members/vijayamnair-2.jpg" 
            name="Vijayam Nair" 
            title="Executive Committee Member" 
            delay={150} 
          />
          <Member 
            imgSrc="src/assets/img/c_members/sarasamma-1.jpg" 
            name="Sarasamma" 
            title="Cultural Committee Convener" 
            delay={300} 
          />
          <Member 
            imgSrc="src/assets/img/committee/committee/VineetaNair.jpg" 
            name="Sarasamma" 
            title="Cultural Committee Convener" 
            delay={400} 
          />
          <Member 
            imgSrc="src/assets/img/committee/committee/VijayNair.jpg" 
            name="Sarasamma" 
            title="Cultural Committee Convener" 
            delay={500} 
          />
            <Member 
            imgSrc="src/assets/img/committee/committee/MaheshPoduval_.jpg" 
            name="Sarasamma" 
            title="Cultural Committee Convener" 
            delay={600} 
          />
            <Member 
            imgSrc="src/assets/img/committee/committee/B.R.Nair.jpg" 
            name="Sarasamma" 
            title="Cultural Committee Convener" 
            delay={700} 
          />
            <Member 
            imgSrc="src/assets/img/committee/committee/Gopall.jpg" 
            name="Sarasamma" 
            title="Cultural Committee Convener" 
            delay={800} 
          />
            <Member 
            imgSrc="src/assets/img/committee/committee/KurianThomas.jpg" 
            name="Sarasamma" 
            title="Cultural Committee Convener" 
            delay={900} 
          />
        </div>
      </div>
    </section>
  );
};

export default CommitteeMembers;
