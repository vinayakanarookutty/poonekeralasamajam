import { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const activities = [
    {
      icon: "bx bxl-dribbble",
      title: "Sports and games",
      description: "PKS has always been at the forefront of promoting sports, hosting diverse competitions like the annual Ball Badminton Tournament for the Krishna Kumar Memorial Trophy, honoring a cherished member. Talented Ball Badminton players once graced PKS, their legacy enduring despite their absence. Today, PKS continues its tradition with a grand Annual Sports Meet during Onam, blending celebration and athleticism seamlessly.",
    },
    {
      icon: "bx bx-file",
      title: "Women's Day",
      description: "During its International Women’s Day Celebration every year in March, it has been helping the poor with cloths and other needy items, besides wheelchairs to the ‘divyang’ persons.",
    },
    {
      icon: "bx bx-tachometer",
      title: "Philanthropic Activities",
      description: "PKS is a leading force in philanthropy, offering substantial aid during crises. It provided Rs 5 lakhs in support to Kerala during the 2018 and 2019 floods, and during the challenging Covid-19 pandemic. It also extended significant assistance during earthquakes in Gujarat and Latur (Maharashtra). Additionally, PKS supplied hundreds of tankers of drinking water to drought-affected villages in Maharashtra.",
    },
    {
      icon: "bx bx-world",
      title: "Charity",
      description: "PKS is also providing financial help of approx… Rs.40000 plus every year to the needy people of Pune and other places for medical treatment and educational purposes.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container mt-3">
        <div className="section-title pt-3">
          <h2>Activities</h2>
          <p className='pt-3'>
            PKS is a powerhouse in sports and philanthropy. They host events like the Ball Badminton Tournament and support International Women's Day with aid for the needy. During crises, they step up, providing substantial help during floods, earthquakes, and the Covid-19 pandemic. Their ongoing support for medical and educational needs showcases their commitment to making a difference in people's lives.
          </p>
        </div>
        <div className="row pt-4">
          {activities.map((activity, index) => (
            <div key={index} className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <i className={activity.icon}></i>
                </div>
                <h4 className="title">
                  <a href="#">{activity.title}</a>
                </h4>
                <p className="description">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-right">
          <Link to="/more-activities" className="btn btn-primary text-xs py-1 px-2 mt-5">See More</Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
