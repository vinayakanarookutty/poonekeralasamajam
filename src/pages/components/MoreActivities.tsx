import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import NewHeader from './NewHeader';
import Image from "../../assets/img/madras-high-court-handsketch-watercolor-600nw-2351270087.jpg"

function MoreActivities() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <>
  
    
    <section  id="services" className="services">
      <div className="container">
        <div  style={{ backgroundImage: `url(${Image})` }} className="section-title">
          <h2>Activities</h2>
          <p>
            PKS is a powerhouse in sports and philanthropy. They host events like
            the Ball Badminton Tournament and support International Women's Day with
            aid for the needy. During crises, they step up, providing substantial
            help during floods, earthquakes, and the Covid-19 pandemic. Their ongoing
            support for medical and educational needs showcases their commitment to
            making a difference in people's lives.
          </p>
          
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title"><a href="#">Sports and games</a></h4>
              <p className="description">
                PKS has always been at the forefront of promoting sports, hosting diverse
                competitions like the annual Ball Badminton Tournament for the Krishna Kumar
                Memorial Trophy, honoring a cherished member. Talented Ball Badminton players
                once graced PKS, their legacy enduring despite their absence. Today, PKS
                continues its tradition with a grand Annual Sports Meet during Onam, blending
                celebration and athleticism seamlessly.
              </p>
              <Link to='/activities'><button  className='pl-[70%]'>See more</button></Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href="#">Women's Days</a></h4>
              <p className="description">
                During its International Women’s Day Celebration every year in March, it has
                been helping the poor with clothes and other needy items, besides wheelchairs
                to the ‘divyang’ persons.
              </p>

            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="#">Philanthropic Activities</a></h4>
              <p className="description">
                PKS is a leading force in philanthropy, offering substantial aid during crises.
                It provided Rs 5 lakhs in support to Kerala during the 2018 and 2019 floods,
                and during the challenging Covid-19 pandemic. It also extended significant
                assistance during earthquakes in Gujarat and Latur (Maharashtra). Additionally,
                PKS supplied hundreds of tankers of drinking water to drought-affected villages
                in Maharashtra.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex mb-5 mb-lg-0 ">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="#">Charity</a></h4>
              <p className="description">
                PKS is also providing financial help of approx… Rs.40000 plus every year to the
                needy people of Pune and other places for medical treatment and educational purposes.
              </p>
            </div>
          </div>

          
         
        </div>

























        <div className="row mt-5">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title"><a href="#">Educational Initiatives</a></h4>
              <p className="description">
              PKS offers scholarships to meritorious students from economically weaker sections to support their higher education. This initiative aims to empower the youth and contribute to their academic growth.
              The Samaj provides tutoring and mentoring services to school children, helping them with their studies and offering guidance for their future careers.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href="#">Health and Wellness</a></h4>
              <p className="description">
              PKS organizes regular health camps in collaboration with local hospitals and healthcare professionals, providing free medical check-ups, eye camps, and dental care services to the community.
              To promote a healthy lifestyle, PKS conducts yoga and wellness programs, encouraging physical fitness and mental well-being among its members.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="#">Environmental Initiatives</a></h4>
              <p className="description">
              PKS actively participates in environmental conservation by organizing tree plantation drives, contributing to a greener and healthier environment.
              The Samaj conducts clean-up campaigns in local areas, promoting cleanliness and environmental awareness among the community members.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="#">Social and Community Engagement</a></h4>
              <p className="description">
              PKS provides support to senior citizens through various initiatives, including organizing social gatherings, health check-ups, and providing essential services to improve their quality of life.
              The Samaj runs various youth engagement programs, including leadership workshops, career counseling sessions, and sports competitions, aimed at nurturing the talents and potential of young members.
              </p>
            </div>

            
          </div>


          <div className="col-md-6 col-lg-3 d-flex mb-5 mb-lg-0 mt-5">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="#">Crisis and Disaster Relief</a></h4>
              <p className="description">
              PKS conducts workshops on disaster preparedness and management, educating the community on how to respond effectively during emergencies.
              The Samaj trains volunteers to assist during crises, ensuring a prompt and efficient response to natural disasters and other emergencies.
              </p>
            </div>

            
          </div>

          
         
        </div>
      </div>
    </section>
    </>
  );
}

export default MoreActivities;
