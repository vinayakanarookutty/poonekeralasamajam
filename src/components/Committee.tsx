import "../css/home.css";
import PCMemberCard from "./PCMemberCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

// Import images
import BmadhunairImage from '../assets/img/committee/committee/Bmadhunair.jpg';
import VijyImage from '../assets/img/committee/committee/vjy.jpg';
import GopallImage from '../assets/img/committee/committee/Gopall.jpg';
import Jagdish_PoduvalImage from '../assets/img/committee/committee/Jagdish_Poduval.jpg';
import SureshnImage from '../assets/img/committee/committee/sureshn.jpg';
import SomImage from '../assets/img/committee/committee/som.jpg';
import Anil_GeorgeImage from '../assets/img/c_members/Anil-George.jpg';
import Vijayamnair_2Image from '../assets/img/c_members/vijayamnair-2.jpg';
import SarasammaImage from '../assets/img/c_members/sarasamma-1.jpg';
import VineetaNair from '../assets/img/committee/committee/VineetaNair.jpg';
import PDavis from '../assets/img/committee/committee/PDavis.jpg';
import VijayPoduval from '../assets/img/committee/committee/Vijay Poduval.jpg';
import BRNair from '../assets/img/committee/committee/B.R.Nair.jpg';
import KurianThomas from '../assets/img/committee/committee/KurianThomas.jpg';
import VijayNair from '../assets/img/committee/committee/VijayNair.jpg';
import SusheelaNair from '../assets/img/committee/committee/SusheelaNair.jpg';
import SUMenon from '../assets/img/committee/committee/SUMenon_.jpg';
import MaheshPoduval from '../assets/img/committee/committee/MaheshPoduval_.jpg';
import PreetaNair from '../assets/img/committee/committee/PreetaNair_.jpg';
import MohandasNair from '../assets/img/committee/committee/mohandasnair_.jpg';

function Testimonials() {
  const members = [
    {
      image: BmadhunairImage,
      name: "B Madhu Nair",
      position: "President",
      phone: '',
    },
    {
      image: VijyImage,
      name: "K Vijayakumar",
      position: "Vice President",
      phone: '',
    },
    {
      image: GopallImage,
      name: "Gopalakrishnan Nair.D",
      position: "General Secretary",
      phone: '',
    },
    {
      image: Jagdish_PoduvalImage,
      name: "Jagdish Poduval",
      position: "Joint Treasurer",
      phone: '',
    },
    {
      image: SureshnImage,
      name: "C. Sureshan",
      position: "Joint Secretary",
      phone: '',
    },
    {
      image: SomImage,
      name: "C. Soman",
      position: "Joint Secretary",
      phone: '',
    },
    {
      image: Anil_GeorgeImage,
      name: "Anil George",
      position: "Executive Committee Member",
      phone: '',
    },
    {
      image: Vijayamnair_2Image,
      name: "Vijayam Nair",
      position: "Executive Committee Member",
      phone: '',
    },
    {
      image: SarasammaImage,
      name: "Sarasamma",
      position: "General Clutural Committee Convener",
      phone: '',
    },
    {
      image: VineetaNair,
      name: "Vineeta Nair",
      position: "Ladies Wing Convener",
      phone: '',
    },
    {
      image: PDavis,
      name: "P. Davis",
      position: "Executive Committee Member",
      phone: '',
    },
    {
      image: VijayPoduval,
      name: "Vijay Poduval",
      position: "Executive Committee Member",
      phone: '',
    },
    {
      image: BRNair,
      name: "B. R. Nair",
      position: "Arts Committee Convener",
      phone: '',
    },
    {
      image: KurianThomas,
      name: "Kurian Thomas(Prince)",
      position: "Executive Committee Member",
      phone: '',
    },
    {
      image: VijayNair,
      name: "Vijay Nair",
      position: "Youth Wing Convener",
      phone: '',
    },
    {
      image: SusheelaNair,
      name: "Susheela Nair",
      position: "Social Welfare Convener",
      phone: '',
    },
    {
      image: SUMenon,
      name: "S. U. Menon  ",
      position: "P R O",
      phone: '',
    },
    {
      image: MaheshPoduval,
      name: "Mahesh Poduval",
      position: "Sports Committee Convener",
      phone: '',
    },
    {
      image: PreetaNair,
      name: "Preeta  Nair",
      position: "Executive Committee Member",
      phone: '',
    },
    {
      image: MohandasNair,
      name: "Mohandas Nair",
      position: "Executive Committee Member",
      phone: '',
    }
  ];

  return (
    <section id="testimonials" className="testimonials section-bg mt-5 max-h-screen ">
      <div className="container">
        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Present Managing Committee</h2>
          <p>The current PKS Managing Committee, led by Shri. B. Madhusudan Nair, comprises dedicated middle-aged and young members. They are actively sustaining the society's activities on a large scale. In the late 1970s, PKS had just 8 Life Members and fewer than 100 ordinary members, with fees of Rs.3/- for ordinary members and Rs.25/- for Life Members annually. Despite the Life Membership Fee now being Rs.1000/-, PKS has grown its Life Membership to 350, showcasing a commendable achievement in expanding its membership base.</p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        
        >
          {
            members.map((member, index) => (
              <SwiperSlide key={index}>
                <PCMemberCard
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  phone={member.phone}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>

      </div>
      <div className="text-right">
          <Link to="/committee" className="btn btn-primary">View details</Link>
      </div>
    </section>
  );
}

export default Testimonials;
