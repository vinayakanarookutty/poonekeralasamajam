import "../../css/home.css"
import PCMemberCard from "./PCMemberCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination , Autoplay , Navigation } from 'swiper/modules';

function Testimonials() {

  const members = [
    {
      image: "/src/assets/img/committee/committee/Bmadhunair.jpg",
      name: "B Madhu Nair",
      position: "President",
      phone: '',
    },
    {
      image: "/src/assets/img/committee/committee/vjy.jpg",
      name: "K Vijayakumar",
      position: "Vice President",
      phone: '',
    },
    {
      image: "/src/assets/img/committee/committee/Gopall.jpg",
      name: "Gopalakrishnan Nair.D",
      position: "General Secretary",
      phone: '',
    },
    {
      image: "/src/assets/img/committee/committee/Jagdish_Poduval.jpg",
      name: "Jagdish Poduval",
      position: "Joint Treasurer",
      phone: '',
    },
    {
      image: "/src/assets/img/committee/committee/sureshn.jpg",
      name: "C. Sureshan",
      position: "Joint Secretary",
      phone: '',
    },
    {
      image: "/src/assets/img/committee/committee/som.jpg",
      name: "C. Soman",
      position: "Joint Secretary",
      phone: '',
    },
    {
      image: "/src/assets/img/c_members/Anil-George.jpg",
      name: "Anil George",
      position: "Executive Committee Member",
      social: {
        twitter: "",
        fb: "",
        inst: "",
        linkedin: "",
      },
    },
    {
      image: "/src/assets/img/c_members/vijayamnair-2.jpg",
      name: "Vijayam Nair",
      position: "Executive Committee Member",
      social: {
        twitter: "",
        fb: "",
        inst: "",
        linkedin: "",
      },
    },
    {
      image: "/src/assets/img/c_members/sarasamma-1.jpg",
      name: "Sarasamma",
      position: "General Clutural Committee Convener",
      social: {
        twitter: "",
        fb: "",
        inst: "",
        linkedin: "",
      },
    }
  ]

  return (
    <section id="testimonials" className="testimonials section-bg mt-5 h-screen mt-5">
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
          modules={[Pagination , Autoplay]}
          className="mySwiper"
          navigation={true}
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
    </section>
  );
}

export default Testimonials;
