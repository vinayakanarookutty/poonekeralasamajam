import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

function About() {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="about" className="about">
      <div className="container ml-10 h-screen">
        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch" data-aos="fade-up">
            <div className="content">
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <FaArrowAltCircleLeft
                  style={{ fontSize: "30px", color: "red", cursor: "pointer" }}
                  onClick={() => setIndex(index > 0 ? index - 1 : index)}
                />
                <h3 className="head">
                  The History Of Poona Keraleeya Samaj
                </h3>
                <FaArrowAltCircleRight
                  style={{ fontSize: "30px", color: "blue", cursor: "pointer" }}
                  onClick={() => setIndex(index < 3 ? index + 1 : index)}
                />
              </div>
              <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                <Carousel.Item>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "500px" }}>
                    <p style={{ width: "80%", fontSize: "20px", fontWeight: "300" }}>
                      In pre-Independence days, the population of Pune (then known as Poona) was hardly 2 to 3 lakhs including a few thousands of Malayalees, mainly bachelors,  employed at different Central  Government establishments and  residing at different parts of Pune (Poona). If there was a  concentration (if at all it can be  called a concentration) of a few hundreds of Malayalees, it was at  places like Rasta Peth and Kirkee  (now known as Khadki). The  reason for this concentration of  Malayalees at these places was  that there were a few lodge-cum- eateries run by Malayalees  providing food and shared accommodation at an affordable  cost of less than Rs.50/- per  month/per person.
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "500px" }}>
                    <p style={{ width: "80%", fontSize: "18px", fontWeight: "300" }}>
                      At that time,  the monthly salary received by a  Central Government employee was  less than Rs.100/-. The  parents and siblings of many of  such Pune (Poona) Malayalees at  that time depended upon whatever  their sons or daughters  or brothers or sisters were able to  remit every month through Money  Orders to their native  villages in Kerala after meeting  their expenses at Pune from their  meager salary earnings. Because of  this burden on their shoulders, it was beyond their capacity to  spend any amount of money for  going to a cinema or any other  such entertainment.
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "500px" }}>
                    <p style={{ width: "80%", fontSize: "18px", fontWeight: "300" }}>
                      There was no common place available to them to sit together and chit-chat or to share their happiness or sorrows. This situation created a thought in the minds of a handful of them to think in terms of creating an association of  Malayalees with no bars on the caste , social economic status or  religion and to search for a place for it so that they can all meet every day and spend some time together.  This prompted them to form the ‘POONA KERALEEYA SAMAJ’.  Thus, the first Malayalee Organization – Poona Keraleeya Samaj – was born sometime in the latter part of the year 1930 at 356, Rasta Peth, a small 2-room tenement opposite KEM Hospital, Pune.
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "500px" }}>
                    <p style={{ width: "80%", fontSize: "18px", fontWeight: "300" }}>
                      A few  years after its birth, Poona Keraleeya Samaj (popularly known as PKS) was bifurcated into two separate organizations – one named as ‘East Poona Kerala Samaj’, which was set up Kirkee (Khadki) and the other continued to be known as ‘Poona Keraleeya Samaj’ and remained at its original place at 356, Rasta Peth, where it continues to exist even today.  Poona Keraleeya Samaj was registered with the Charity Commissioner, Pune Region, as a Charitable and Social Organization in the year 1944 under Registration No
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
