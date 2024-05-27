import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import clb1Image from '../assets/img/gallery/clb1.jpg';
import clbImage from '../assets/img/gallery/clb.jpg';
import clb2Image from '../assets/img/gallery/clb2.jpg';
import clb3Image from '../assets/img/gallery/clb3.jpg';
import onamImage from '../assets/img/gallery/onam.jpg';
import prize_disImage from '../assets/img/gallery/prize_dis.jpg';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    if (isButtonClicked) {
      const timer = setTimeout(() => {
        setIsButtonClicked(false);
      }, 500); // Duration of animation in milliseconds
      return () => clearTimeout(timer);
    }
  }, [isButtonClicked]);

  // Import images

  const portfolioItems = [
    { src: clb1Image, category: "filter-app", title: "App 1" },
    { src: clbImage, category: "filter-web", title: "Web 3" },
    { src: clb1Image, category: "filter-app", title: "App 2" },
    { src: clb2Image, category: "filter-card", title: "Card 2" },
    { src: clb3Image, category: "filter-web", title: "Web 2" },
    { src: onamImage, category: "filter-app", title: "App 3" },
    { src: clb1Image, category: "filter-card", title: "Card 1" },
    { src: prize_disImage, category: "filter-card", title: "Card 3" },
    { src: clb1Image, category: "filter-web", title: "Web 3" },

  ];

  const handleFilterClick = (filter: string) => {
    const category = filter.replace(".", "");
    setActiveFilter(category);
    setIsButtonClicked(true); 
  };

  // Filter the portfolio items based on the active filter
  const filteredPortfolioItems = activeFilter === "*" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

  // Animation variants
  const variants = {
    hidden: { opacity: 0, scale: 0.9 , y : 100 },
    visible: { opacity: 1, scale: 1 , y: 0 },
  };

  return (
    <section id="portfolio" className="portfolio mt-4">
      <div className="container">
        <div className="section-title" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-bold">Gallery</h2>
          <p>
          Welcome to the Poona Keraleeya Samaj Gallery! Discover the vibrant culture of Keralites in Pune through photos of our art exhibitions, traditional dance and music performances, spirited sports events, and joyous celebrations like Onam, Vishu, and Christmas. Experience the unity and richness of our community captured in these memorable moments.
          </p>
        </div>

        <div className='w-full flex justify-center mb-10'>
          <div className="row" data-aos="fade-up" data-aos-delay="200">
            <ul id="portfolio-flters" className="flex p-3 text-xs md:text-sm max-w-[400px] rounded-full">
              <li onClick={() => handleFilterClick("*")} className={`cursor-pointer px-3 py-2 ${activeFilter === "*" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} mr-2 rounded-md`}>All</li>
              <li onClick={() => handleFilterClick(".filter-app")} className={`cursor-pointer px-3 py-2 ${activeFilter === ".filter-app" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} mr-2 rounded-md`}>Arts</li>
              <li onClick={() => handleFilterClick(".filter-card")} className={`cursor-pointer px-3 py-2 ${activeFilter === ".filter-card" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} mr-2 rounded-md`}>Sports</li>
              <li onClick={() => handleFilterClick(".filter-web")} className={`cursor-pointer px-3 py-2 ${activeFilter === ".filter-web" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} mr-2 rounded-md`}>Celebrations</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="300">
          {filteredPortfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="portfolio-item"
              variants={variants}
              initial="hidden"
              animate={isButtonClicked ? "hidden" : "visible"}
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
        <div className="text-right">
          <Link to="/gallery" className="btn btn-primary">See More</Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
