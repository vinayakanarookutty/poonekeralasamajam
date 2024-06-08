import React,{useEffect} from 'react';
import BreadCrump from './ui/BreadCrump';
import img1 from "../assets/img/committee/committee/Bmadhunair.jpg"
import img2 from "../assets/img/committee/committee/Gopall.jpg"
import img3 from "../assets/img/committee/committee/MNNambiar.jpeg"
import img4 from "../assets/img/committee/committee/kvijayakumar-1.jpg"
import img5 from "../assets/img/committee/somanpillai.jpeg"
import img6 from "../assets/img/committee/committee/sureshn.jpg"
import img7 from "../assets/img/committee/committee/Jagdish_Poduval.jpg"
import img8 from "../assets/img/c_members/sarasamma-1.jpg"
import img9 from "../assets/img/committee/committee/B.R.Nair.jpg"
import img10 from "../assets/img/committee/committee/SusheelaNair.jpg"
import img11 from "../assets/img/committee/committee/SUMenon_.jpg"
import img12 from "../assets/img/committee/committee/MaheshPoduval_.jpg"
import img13 from "../assets/img/committee/committee/VijayNair.jpg"
import img14 from "../assets/img/committee/committee/VineetaNair.jpg"
import img15 from "../assets/img/committee/committee/Vijay Poduval.jpg"
import img16 from "../assets/img/c_members/vijayamnair-2.jpg"
import img17 from "../assets/img/c_members/Anil-George.jpg"
import img18 from "../assets/img/committee/committee/PreetaNair_.jpg"
import img19 from "../assets/img/committee/committee/KurianThomas.jpg"
import img20 from "../assets/img/committee/committee/mohandasnair_.jpg"
import img21 from "../assets/img/committee/committee/PDavis.jpg"

interface MemberProps {
  imgSrc: string;
  name: string;
  title: string;
  delay: number;
}

const Member: React.FC<MemberProps> = ({ imgSrc, name, title, delay }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <>
    <div className="flex justify-start pt-5 "style={{paddingLeft : "10%"}}>
      <BreadCrump items={["Committee"]} />
    </div>
    <section id="team" className="team">
      <div className="container ">
        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Committee Members</h2>
        </div>
        <div className="row lg:pl-[10%] sm:pl-[25%]">
          <Member
            imgSrc={img1}
            name="B. Madhu Nair"
            title="President"
            delay={0}
          />
          <Member
            imgSrc={img2}
            name="Gopalakrishnan Nair"
            title="General Secretary"
            delay={0}
          />
          <Member
            imgSrc={img3}
            name="M. N. Nambiar"
            title="Treasurer"
            delay={0}
          />
          <Member
            imgSrc={img4}
            name="K Vijayakumar"
            title="Vice President"
            delay={80}
          />
          <Member
            imgSrc={img5}
            name="C. Soman"
            title="Joint Secretary"
            delay={80}
          />
          <Member
            imgSrc={img6}
            name="C. Sureshan"
            title="Joint Secretary"
            delay={80}
          />
          <Member
            imgSrc={img7}
            name="Jagdish Poduval"
            title="Joint Treasurer"
            delay={100}
          />
          <Member
            imgSrc={img8}
            name="Sarasamma Vijaykumar"
            title="General Cultural Committee Convener"
            delay={100}
          />
          <Member
            imgSrc={img9}
            name="B. R. Nair"
            title="Arts Committee Convener"
            delay={100}
          />
          <Member
            imgSrc={img10}
            name="Susheela Nair"
            title="Social Welfare Convener"
            delay={140}
          />
          <Member
            imgSrc={img11}
            name="S. U. Menon"
            title="P R O"
            delay={140}
          />
          <Member
            imgSrc={img12}
            name="Mahesh Poduval"
            title="Sports Committee Convener"
            delay={140}
          />
          <Member
            imgSrc={img13}
            name="Vijay Nair"
            title="Youth Wing Convener"
            delay={200}
          />
          <Member
            imgSrc={img14}
            name="Vineeta A. Nair"
            title="Ladies Wing Convener"
            delay={200}
          />
          <Member
            imgSrc={img15}
            name="Vijay Poduval"
            title="Executive Committee Member"
            delay={200}
          />
          <Member
            imgSrc={img16}
            name="Vijayam A. Nair"
            title="Executive Committee Member"
            delay={250}
          />
          <Member
            imgSrc={img17}
            name="Anil George"
            title="Executive Committee Member"
            delay={250}
          />
          <Member
            imgSrc={img18}
            name="Preeta Nair"
            title="Executive Committe Member"
            delay={250}
          />         
          <Member
            imgSrc={img19}
            name="Kurian Thomas(Prince)"
            title="Executive Committee Convener"
            delay={300}
          />
          <Member
            imgSrc={img20}
            name="Mohandas Nair"
            title="Executive Committe Member"
            delay={300}
          />
          <Member
            imgSrc={img21}
            name="P. Davis"
            title="Executive Committee Member"
            delay={300}
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default MoreCommittee;