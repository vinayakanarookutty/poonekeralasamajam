import { motion } from "framer-motion";
import "../css/home.css";

import BgCarousel from "./BgCarousel";
import arrow from "../assets/img/down-arrow.png";
import FlashNews from "./FlashNews";

function Welcome() {
    return (
        <section id="hero" className={`h-[80%] relative`}>
            {/* <FlashNews /> */}
            <BgCarousel />

            <div className="hero-container h-screen p-14 mt-8 " data-aos="fade-up">
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
                    {/* <div className="bg-transparent absolute ml-[50%] backdrop-contrast-50 bg-[#032336e5] ">
        <div className="section">
            <h2>Pinned Messages</h2>
           
            <p>This is an important announcement.</p>
            <p>Another pinned message goes here.</p>
        </div>
        <div className="section -z-40">
            <h2>Notifications</h2>
            <div className="notifications">
             
                <p>New update available!</p>
                <p>Reminder: Meeting at 3 PM.</p>
                <p>Notification about something else.</p>
            </div>
        </div>
    </div> */}
                    <h1>Welcome to PKS</h1>
                    <h2>Where Pune Meets Kerala : Poona Keraleeya Samaj </h2>
                    <h2 style={{maxWidth:"50%"}}>Nestled in the vibrant city of Pune, the Pune Kerala Residents Association (PKRA) is a dynamic and inclusive community dedicated to bringing together the people of Kerala residing in Pune. Our association serves as a cultural, social, and support hub, fostering a sense of unity and belonging among Keralites while celebrating the rich heritage and traditions of Kerala.

</h2>
                    <a href="#history" className="btn-get-started scrollto ">
                        <img
                            className="invert w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            src={arrow}
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Welcome;
