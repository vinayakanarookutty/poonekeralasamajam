import { motion } from "framer-motion";
import "../css/home.css";

import BgCarousel from "./BgCarousel";
import arrow from "../assets/img/down-arrow.png";
import FlashNews from "./FlashNews";

function Welcome() {
    return (
        <section id="hero" className={`h-[80%] relative `}>
            {/* <FlashNews /> */}
            {/* <FlashNews/> */}
            <BgCarousel />

            <div className="hero-container h-screen p-14 mt-36 " data-aos="fade-up">
                <motion.div
                    className="box"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                
                    <h1>Welcome to PKS</h1>
                    <h2>Where Pune Meets Kerala : Poona Keraleeya Samaj </h2>
                    <h2 style={{maxWidth:"80%"}}>Poona Keraleeya Samaj was registered with the Charity Commissioner, Pune Region, as a Charitable and Social Organization in the year 1944</h2>
                    <button className="btnfirst absolute">Contact US</button>
                    {/* <a href="#history" className="btn-get-started scrollto mt-3">
                        <img
                            className="invert  w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            src={arrow}
                        />
                    </a> */}
                </motion.div>
            </div>
        </section>
    );
}

export default Welcome;
