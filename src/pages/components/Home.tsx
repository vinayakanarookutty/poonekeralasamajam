import React from 'react';
import { motion } from 'framer-motion';
import "../../css/home.css"

function Hero() {
  return (
    <section id="hero" className='h-screen'>
      <div className="hero-container h-screen" data-aos="fade-up">
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
  );
}

export default Hero;
