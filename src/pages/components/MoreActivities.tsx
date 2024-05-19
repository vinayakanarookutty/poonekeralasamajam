import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MoreActivities() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
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
          <div className="col-md-6 col-lg-3 d-flex mb-5 mb-lg-0">
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
      </div>
    </section>
  );
}

export default MoreActivities;
