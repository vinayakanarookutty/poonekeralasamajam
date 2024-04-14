import React from 'react';


function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch" data-aos="fade-up">
            <div className="content">
              <h3>The History Of Poona Keraleeya samaj</h3>
              <p>
                In pre-Independence days, Pune's population, then called Poona, was around 2 to 3 lakhs, with a small number of Malayalees...
              </p>
            </div>
          </div>
          <div className="icon-boxes d-flex flex-column justify-content-center">
            <div className="row">
              <div data-aos="fade-up" data-aos-delay="100">
                {/* <img src="/src/assets/img/pks_act1.jpg" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
