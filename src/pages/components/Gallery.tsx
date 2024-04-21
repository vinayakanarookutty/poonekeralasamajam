import { useState } from 'react';
import { motion } from "framer-motion";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const portfolioItems = [
    { src: "/src/assets/img/gallery/clb1.jpg", category: "filter-app", title: "App 1" },
    { src: "/src/assets/img/gallery/clb.jpg", category: "filter-web", title: "Web 3" },
    { src: "/src/assets/img/gallery/clb1.jpg", category: "filter-app", title: "App 2" },
    { src: "/src/assets/img/gallery/clb2.jpg", category: "filter-card", title: "Card 2" },
    { src: "/src/assets/img/gallery/clb3.jpg", category: "filter-web", title: "Web 2" },
    { src: "/src/assets/img/gallery/onam.jpg", category: "filter-app", title: "App 3" },
    { src: "/src/assets/img/gallery/clb1.jpg", category: "filter-card", title: "Card 1" },
    { src: "/src/assets/img/gallery/prize_dis.jpg", category: "filter-card", title: "Card 3" },
    { src: "/src/assets/img/gallery/clb1.jpg", category: "filter-web", title: "Web 3" },
    // Add more portfolio items here
  ];

  const handleFilterClick = (filter:any) => {
    const category = filter.replace(".", "");
    setActiveFilter(category);
    setIsButtonClicked(true); // Set button clicked to true
  };

  // Filter the portfolio items based on the active filter
  const filteredPortfolioItems = activeFilter === "*" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio mt-4">
      <div className="container">
        <div className="section-title" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-bold">Gallery</h2>
          <p>
            PKS has always championed sports, hosting diverse competitions like the annual Ball Badminton Tournament...
          </p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-12 flex justify-center">
            <ul id="portfolio-flters" className="flex">
              <li onClick={() => handleFilterClick("*")} className={`cursor-pointer px-4 py-2 ${activeFilter === "*" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} mr-2 rounded-md`}>All</li>
              <li onClick={() => handleFilterClick(".filter-app")} className={`cursor-pointer px-4 py-2 ${activeFilter === ".filter-app" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} mr-2 rounded-md`}>Arts</li>
              <li onClick={() => handleFilterClick(".filter-card")} className={`cursor-pointer px-4 py-2 ${activeFilter === ".filter-card" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} mr-2 rounded-md`}>Sports</li>
              <li onClick={() => handleFilterClick(".filter-web")} className={`cursor-pointer px-4 py-2 ${activeFilter === ".filter-web" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} mr-2 rounded-md`}>Celebrations</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="300">
          {filteredPortfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={isButtonClicked ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
              animate={isButtonClicked ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="portfolio-item"
            >
              <div className="portfolio-wrap">
                <img src={item.src} className="img-fluid" alt={item.title} />
                <div className="portfolio-links">
                  <a href={item.src} data-gallery="portfolioGallery" className="portfolio-lightbox" title={item.title}><i className="bx bx-plus"></i></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
