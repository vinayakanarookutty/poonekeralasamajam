import "../css/hero.css";
import { motion } from "framer-motion";

function Hero() {
    return (
        <>
            <div className="hero-container h-screen">
                <div className="hero-content">
                    <motion.div
                        initial={{ scale: 0.7 }}
                        animate={{ scale: 1.1 }}
                        transition={{
                            type: "spring",
                            delay: 0.25,
                        }}
                        className="hero-info"
                    >
                        <h1 className="hero-info-heading text-white">
                            Poona Keraliya Samaj
                        </h1>
                        <p className="hero-info-subheading text-white">
                            Where kerala meets Pune
                        </p>

                        <p className="hero-info-para text-white">
                            The Poona Keraliya Samaj is a vibrant cultural and
                            social organization based in Pune, Maharashtra,
                            dedicated to fostering a sense of community among
                            Malayalees, who are people originally from the
                            Indian state of Kerala.
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Hero;
