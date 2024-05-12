
import { motion } from 'framer-motion';
import "../../css/home.css"
import BgCarousel from './BgCarousel';
import arrow from "../../assets/img/down-arrow.png"

function Hero() {
  return (
    <section id="hero" className={`h-screen relative`}>
      <BgCarousel/>
      <div className="hero-container h-screen" data-aos="fade-up">
        <motion.div
          className="box"
          initial={{ opacity: 0, y : 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1>Welcome to PKS</h1>
          <h2>Where Pune Meets Kerala : Poona Keraleeya Samaj </h2>
          <a href="#history" className="btn-get-started scrollto "><img className='invert w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={arrow} /></a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
