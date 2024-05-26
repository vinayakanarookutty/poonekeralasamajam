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

const MoreCommittee: React.FC = () => {
  return (
    <section id="team" className="team">
      <div className="container ">
        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Committee Members</h2>
        </div>
        <div className="row lg:pl-[10%] sm:pl-[25%]">
          <Member
            imgSrc="src/assets/img/committee/committee/Bmadhunair.jpg"
            name="B. Madhu Nair"
            title="President"
            delay={0}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/MNNambiar.jpeg"
            name="M. N. Nambiar"
            title="Treasurer"
            delay={0}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/Gopall.jpg"
            name="Gopalakrishnan Nair"
            title="General Secretary"
            delay={0}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/vjy.jpg"
            name="K Vijayakumar"
            title="Vice President"
            delay={80}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/som.jpg"
            name="C. Soman"
            title="Joint Secretary"
            delay={80}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/sureshn.jpg"
            name="C. Sureshan"
            title="Joint Secretary"
            delay={80}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/Jagdish_Poduval.jpg"
            name="Jagdish Poduval"
            title="Joint Treasurer"
            delay={100}
          />
          <Member
            imgSrc="src/assets/img/c_members/sarasamma-1.jpg"
            name="Sarasamma Vijaykumar"
            title="General Cultural Committee Convener"
            delay={100}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/B.R.Nair.jpg"
            name="B. R. Nair"
            title="Arts Committee Convener"
            delay={100}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/SusheelaNair.jpg"
            name="Susheela Nair"
            title="Social Welfare Convener"
            delay={140}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/SUMenon_.jpg"
            name="S. U. Menon"
            title="P R O"
            delay={140}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/MaheshPoduval_.jpg"
            name="Mahesh Poduval"
            title="Sports Committee Convener"
            delay={140}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/VijayNair.jpg"
            name="Vijay Nair"
            title="Youth Wing Convener"
            delay={200}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/VineetaNair.jpg"
            name="Vineeta A. Nair"
            title="Ladies Wing Convener"
            delay={200}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/Vijay Poduval.jpg"
            name="Vijay Poduval"
            title="Executive Committee Member"
            delay={200}
          />
          <Member
            imgSrc="src/assets/img/c_members/vijayamnair-2.jpg"
            name="Vijayam A. Nair"
            title="Executive Committee Member"
            delay={250}
          />
          <Member
            imgSrc="src/assets/img/c_members/Anil-George.jpg"
            name="Anil George"
            title="Executive Committee Member"
            delay={250}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/PreetaNair_.jpg"
            name="Preeta Nair"
            title="Executive Committe Member"
            delay={250}
          />         
          <Member
            imgSrc="src/assets/img/committee/committee/KurianThomas.jpg"
            name="Kurian Thomas(Prince)"
            title="Executive Committee Convener"
            delay={300}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/mohandasnair_.jpg"
            name="Mohandas Nair"
            title="Executive Committe Member"
            delay={300}
          />
          <Member
            imgSrc="src/assets/img/committee/committee/PDavis.jpg"
            name="P. Davis"
            title="Executive Committee Member"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default MoreCommittee;
