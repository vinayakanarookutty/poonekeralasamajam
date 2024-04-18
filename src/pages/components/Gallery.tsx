import React from 'react';


function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Gallery</h2>
          <p>
            PKS has always championed sports, hosting diverse competitions like the annual Ball Badminton Tournament...
          </p>
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
  );
}

export default Portfolio;
