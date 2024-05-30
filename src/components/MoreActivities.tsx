import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import BreadCrump from './ui/BreadCrump';

function MoreActivities() {
  useEffect(() => {
    AOS.init(); 
    window.scrollTo(0, 0);
  }, []);
  

  // Define an array to hold activity data
  const activities = [
    {
      title: "Sports and games",
      description: "PKS has always been at the forefront of promoting sports, hosting diverse competitions like the annual Ball Badminton Tournament for the Krishna Kumar Memorial Trophy, honoring a cherished member. Talented Ball Badminton players once graced PKS, their legacy enduring despite their absence. Today, PKS continues its tradition with a grand Annual Sports Meet during Onam, blending celebration and athleticism seamlessly.",
      buttonText: "See more",
      link: "/activities"
    },
    {
      title: "Women's Days",
      description: "During its International Women’s Day Celebration every year in March, it has been helping the poor with clothes and other needy items, besides wheelchairs to the ‘divyang’ persons.",
      link: "/activities",
      buttonText: "See more",
    },
    {
      title: "Philanthropic Activities",
      description: "PKS is a leading force in philanthropy, offering substantial aid during crises. It provided Rs 5 lakhs in support to Kerala during the 2018 and 2019 floods, and during the challenging Covid-19 pandemic. It also extended significant assistance during earthquakes in Gujarat and Latur (Maharashtra). Additionally, PKS supplied hundreds of tankers of drinking water to drought-affected villages in Maharashtra.",
      link: "/activities",
      buttonText: "See more",
    },
    
    // Add more activities here
  ];

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', padding: '20px' }}>
      <div className="flex justify-start mt-5 " style={{paddingLeft:"7%"}}>
        <BreadCrump items={["More-Activities"]} />
      </div>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2 style={{fontWeight:"700"}}>Activities</h2>
            <p style={{fontWeight:"700"}}>
              PKS is a powerhouse in sports and philanthropy. They host events like
              the Ball Badminton Tournament and support International Women's Day with
              aid for the needy. During crises, they step up, providing substantial
              help during floods, earthquakes, and the Covid-19 pandemic. Their ongoing
              support for medical and educational needs showcases their commitment to
              making a difference in people's lives.
            </p>
          </div>
          <div className="row">
            {/* Map through activities array to render each activity */}
            {activities.map((activity, index) => (
              <div key={index} className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4 className="title">{activity.title}</h4>
                  <p className="description ">{activity.description}</p>
                  {/* Render button and link only if provided */}
                  {activity.buttonText && activity.link && (
                    <Link to={activity.link}><button className='pl-[70%]'>{activity.buttonText}</button></Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MoreActivities;
