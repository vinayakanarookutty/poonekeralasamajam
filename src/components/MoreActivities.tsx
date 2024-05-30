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
    {
        title: "Cultural Events",
        description: "PKS regularly organizes cultural events to celebrate the rich heritage and traditions of our community. Annual festivals, music concerts, dance performances, and art exhibitions are some of the highlights.",
        link: "/activities",
        buttonText: "See more",
    },
    {
        title: "Educational Workshops",
        description: "Our educational workshops aim to provide skill development and knowledge enhancement. Topics range from technology and science to arts and humanities, catering to all age groups.",
        link: "/activities",
        buttonText: "See more",
    },
    {
        title: "Health Camps",
        description: "PKS organizes free health camps offering medical check-ups, consultations, and basic treatments. These camps are aimed at providing healthcare services to underserved communities.",
        link: "/activities",
        buttonText: "See more",
    },
    {
        title: "Environmental Initiatives",
        description: "We are committed to protecting the environment through tree plantation drives, clean-up campaigns, and awareness programs on sustainability and eco-friendly practices.",
        link: "/activities",
        buttonText: "See more",
    },
    {
        title: "Youth Programs",
        description: "Our youth programs focus on leadership development, career guidance, and personal growth. These initiatives help young individuals build a strong foundation for their future.",
        link: "/activities",
        buttonText: "See more",
    },
    {
        title: "Senior Citizen Support",
        description: "PKS provides various support services for senior citizens, including social gatherings, health care assistance, and recreational activities to ensure their well-being and happiness.",
        link: "/activities",
        buttonText: "See more",
    },
    {
        title: "Community Services",
        description: "Our community services include organizing blood donation drives, distributing food and clothing to the needy, and offering counseling and support to individuals in distress.",
        link: "/activities",
        buttonText: "See more",
    },
    {
        title: "Literacy Programs",
        description: "PKS runs literacy programs aimed at eradicating illiteracy in rural areas. These programs provide basic education and learning materials to children and adults alike.",
        link: "/activities",
        buttonText: "See more",
    },
    {
        title: "Technology Initiatives",
        description: "We promote digital literacy and technology adoption through workshops and training sessions on the latest technological advancements, ensuring everyone is equipped for the digital age.",
        link: "/activities",
        buttonText: "See more",
    }
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
          <div className="row mt-5 ">
            {/* Map through activities array to render each activity */}
            {activities.map((activity, index) => (
              <div key={index} className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 p-3">
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
