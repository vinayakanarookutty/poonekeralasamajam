import React from 'react';
import '../css/home.css';
import { motion } from 'framer-motion';


function Home() {
  return (
    <>
      <header id="header" className="fixed-top header-transparent">
        <div className="container flex align-items-center justify-content-between position-relative">
          <div className="logo">
            <h1 className="text-light"><a href="index.html">Poona Keraleeya Samaj</a></h1>
            <a href="index.html">
              <img src="/src/assets/img/pks_logo.png" alt="" className="img-fluid" />
            </a>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">History</a></li>
              <li><a className="nav-link scrollto" href="#services">Activities</a></li>
              <li><a className="nav-link scrollto" href="#portfolio">Gallery</a></li>
              <li><a className="nav-link scrollto" href="#testimonials">PKS Committee</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <section id="hero">
        <div className="hero-container" data-aos="fade-up">
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h1>Welcome to PKS</h1>
            <h2>Where Pune Meets Kerala : Poona Keraleeya Samaj </h2>
            <a href="#about" className="btn-get-started scrollto"><i className="bx bx-chevrons-down"></i></a>
          </motion.div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="row no-gutters">
              <div className="content col-xl-5 d-flex align-items-stretch" data-aos="fade-up">
                <div className="content">
                  <h3>The History Of Poona Keraleeya samaj</h3>
                  <p>
                    In pre-Independence days, Pune's population, then called Poona, was around 2 to 3 lakhs, with a small number of Malayalees, mainly bachelors, employed in various Central Government establishments. They lived in areas like Rasta Peth and Kirkee due to affordable lodge-cum-eateries run by Malayalees, offering shared accommodation and meals for less than Rs. 50 per month. Many sent money orders back home to Kerala, supporting their families with their meager salaries. Entertainment or social gatherings were limited due to financial constraints. A few Malayalees conceived the idea of a Malayalee association, leading to the establishment of the 'Poona Keraleeya Samaj' around 1930 at 356, Rasta Peth, Pune. Later, this organization split into 'East Poona Kerala Samaj' in Kirkee and 'Poona Keraleeya Samaj,' which remains active at its original location. The latter was formally registered as a Charitable and Social Organization in 1944 with the Charity Commissioner in Pune.
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
                  <h4 className="title"><a href="">Sports and games</a></h4>
                  <p className="description">PKS has always been at the forefront of promoting sports...</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4 className="title"><a href="">Womens Days</a></h4>
                  <p className="description">During its International Women’s Day Celebration every year...</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon"><i className="bx bx-tachometer"></i></div>
                  <h4 className="title"><a href="">Philanthropic Activities</a></h4>
                  <p className="description">PKS is a leading force in philanthropy...</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon"><i className="bx bx-world"></i></div>
                  <h4 className="title"><a href="">Charity</a></h4>
                  <p className="description">PKS is also providing financial help of approx… Rs.40000 plus every  year to the needy people...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio">
          <div className="container">

            <div className="section-title" data-aos="fade-in" data-aos-delay="100">
              <h2>Gallery</h2>
              <p>
                PKS has always championed sports, hosting diverse competitions like the annual Ball Badminton Tournament for the Krishna Kumar Memorial Trophy, honoring a cherished member. Amidst our talented players' legacy, we continue to celebrate sportsmanship with our Annual Sports Meet during Onam, fostering a spirit of unity and athletic excellence.</p>
            </div>

            <div className="row" data-aos="fade-in">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">Arts</li>
                  <li data-filter=".filter-card">Sports</li>
                  <li data-filter=".filter-web">Celebrations</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up">

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="/src/assets/img/gallery/clb1.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="/src/assets/img/gallery/clb1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="/src/assets/img/gallery/clb.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="/src/assets/img/gallery/clb.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="/src/assets/img/gallery/clb1.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="/src/assets/img/gallery/clb1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"> <i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="/src/assets/img/gallery/clb2.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="/src/assets/img/gallery/clb2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"> <i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="/src/assets/img/gallery/clb3.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="/src/assets/img/gallery/clb3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"> <i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="/src/assets/img/gallery/onam.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="/src/assets/img/gallery/onam.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"> <i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="/src/assets/img/gallery/clb1.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="/src/assets/img/gallery/clb1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"> <i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="/src/assets/img/gallery/prize_dis.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="/src/assets/img/gallery/prize_dis.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"> <i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="/src/assets/img/gallery/clb1.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="/src/assets/img/gallery/clb1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"> <i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        <section id="testimonials" className="testimonials section-bg">
          <div className="container">

            <div className="section-title" data-aos="fade-in" data-aos-delay="100">
              <h2>Present Managing Committee</h2>
              <p>The current PKS Managing Committee, led by Shri. B. Madhusudan Nair, comprises dedicated middle-aged and young members. They are actively sustaining the society's activities on a large scale. In the late 1970s, PKS had just 8 Life Members and fewer than 100 ordinary members, with fees of Rs.3/- for ordinary members and Rs.25/- for Life Members annually. Despite the Life Membership Fee now being Rs.1000/-, PKS has grown its Life Membership to 350, showcasing a commendable achievement in expanding its membership base.</p>
            </div>

            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="/src/assets/img/committee/Bmadhunair.jpg" className="testimonial-img" alt=""/>
                    <h3>B Madhu Nair</h3>
                    <h4>President &amp; 9822061992</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="/src/assets/img/committee/vjy.jpg" className="testimonial-img" alt=""/>
                    <h3>K Vijayakumar</h3>
                    <h4>Vice President &amp; 9373318875</h4>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="/src/assets/img/committee/Gopall.jpg" className="testimonial-img" alt=""/>
                    <h3>Gopalakrishnan Nair.D </h3>
                    <h4>General Secretary &amp; 9822271700 </h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="/src/assets/img/committee/MN_Nambiar.jpg" className="testimonial-img" alt=""/>
                    <h3>M. N. Nambiar</h3>
                    <h4>Treasurer &amp; 9850403055 </h4>
                  </div>
                </div>
                      
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="/src/assets/img/committee/Jagdish_Poduval.jpg" className="testimonial-img" alt=""/>
                    <h3>Jagdish Poduval</h3>
                    <h4>Joint Treasurer &amp; 9960266271</h4>
                  </div>
                </div>
                
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="/src/assets/img/committee/sureshn.jpg" className="testimonial-img" alt=""/>
                    <h3>C. Sureshan</h3>
                    <h4>Joint Secretary &amp; 9309849480</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="/src/assets/img/committee/som.jpg" className="testimonial-img" alt=""/>
                    <h3>C. Soman</h3>
                    <h4>Joint Secretary &amp; 9850972250</h4>
                  </div>
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>
        </section>

        
        <section id="team" className="team">
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
                    <span>Clutural Committee Convener</span>
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

        
        <section id="contact" className="contact section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Contact</h2>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="info-box mb-4">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>356 Rasta Peth Pune 411011</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>poonakeraleeyasamaj@example.com</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>9822061992
                    982221700
                    9850403055</p>
                </div>
              </div>

            </div>

            <div className="row">
            </div>

          </div>
        </section>

      </main>
  </>
);
}

export default Home;
