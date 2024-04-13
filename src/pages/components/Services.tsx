import React from 'react';


function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Activities</h2>
          <p>Magnam dolores commodi suscipit...</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title"><a href="#">Sports and games</a></h4>
              <p className="description">PKS has always been at the forefront of promoting sports...</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href="#">Womens Days</a></h4>
              <p className="description">During its International Women’s Day Celebration every year...</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="#">Philanthropic Activities</a></h4>
              <p className="description">PKS is a leading force in philanthropy...</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="#">Charity</a></h4>
              <p className="description">PKS is also providing financial help of approx… Rs.40000 plus every  year to the needy people...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
