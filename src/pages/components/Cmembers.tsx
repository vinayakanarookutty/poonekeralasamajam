import React from 'react';
import "./../../css/home.css"

function Team() {
  return (
    <section id="team" className="team h-screen">
      <div className="container">
        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Committee Members</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up">
              <div className="pic"> <img src="/src/assets/img/c_members/Anil-George.jpg" className="img-fluid" alt=""/> </div>
              <div className="member-info">
                <h4>Anil George</h4>
                <span>Executive Committee Member</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="150">
              <div className="pic"><img src="/src/assets/img/c_members/vijayamnair-2.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Vijayam Nair</h4>
                <span>Executive Committee Member</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="pic"><img src="/src/assets/img/c_members/sarasamma-1.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Sarasamma</h4>
                <span>Cultural Committee Convener</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
