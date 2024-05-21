import React, { useState } from "react";
import "../../css/home.css"; // Assume that the CSS styles are moved to App.css

const ActivitiesDetails: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>("step01");

  const handleStepClick = (step: string) => {
    setActiveStep(step);
  };

  return (
    <div>
      <h1 className="text-gray-800 font-bold mt-[125px] text-center uppercase tracking-[4px] leading-[23px]">
        Sports
      </h1>
      <br />
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            <li
              className={`step step01 ${activeStep === "step01" ? "active" : ""}`}
              onClick={() => handleStepClick("step01")}
            >
              <div className="step-inner ">2019-20</div>
            </li>
            <li
              className={`step step02 ${activeStep === "step02" ? "active" : ""}`}
              onClick={() => handleStepClick("step02")}
            >
              <div className="step-inner">2020-21</div>
            </li>
            <li
              className={`step step03 ${activeStep === "step03" ? "active" : ""}`}
              onClick={() => handleStepClick("step03")}
            >
              <div className="step-inner">2021-22</div>
            </li>
            <li
              className={`step step04 ${activeStep === "step04" ? "active" : ""}`}
              onClick={() => handleStepClick("step04")}
            >
              <div className="step-inner">2022-23</div>
            </li>
            <li
              className={`step step05 ${activeStep === "step05" ? "active" : ""}`}
              onClick={() => handleStepClick("step05")}
            >
              <div className="step-inner">2023-24</div>
            </li>
          </ul>

          <div id="line">
            <div
              id="line-progress"
              style={{
                width: `${
                  activeStep === "step01"
                    ? "3%"
                    : activeStep === "step02"
                    ? "25%"
                    : activeStep === "step03"
                    ? "50%"
                    : activeStep === "step04"
                    ? "75%"
                    : "100%"
                }`,
              }}
            ></div>
          </div>
        </div>

        <div id="progress-content-section">
          <div
            className={`section-content discovery ${
              activeStep === "step01" ? "active" : ""
            }`}
          >
            <h2>In 2019-20</h2>
            <p>
              <b>Annual Cricket Tournament :</b> The Pune Keraleeya Samaj organized its highly anticipated Annual Cricket Tournament in 2019, bringing together teams from various districts. The event saw an impressive turnout, with thrilling matches that kept the audience on the edge of their seats. The champions were awarded a grand trophy and medals.<br></br>

              <b>Badminton Championship :</b> In March 2019, the organization hosted a Badminton Championship at the local indoor stadium. The event attracted players of all age groups and skill levels, making it a fun and inclusive competition. Winners received cash prizes and gift hampers.<br></br>

              <b>Marathon for Charity :</b> The Samaj conducted a Marathon for Charity in May 2019, aiming to raise funds for underprivileged children. The event was a massive success, with over 500 participants running through the scenic routes of Pune. The marathon concluded with a grand prize distribution ceremony.
            </p>
          </div>

          <div
            className={`section-content strategy ${
              activeStep === "step02" ? "active" : ""
            }`}
          >
            <h2> In 2020-21</h2>
            <p>
              <b>Virtual Chess Tournament :</b> Amid the pandemic in 2020, the Pune Keraleeya Samaj adapted by organizing a Virtual Chess Tournament. Participants competed from the safety of their homes, showcasing their strategic skills online. The event was well-received and culminated in an exciting final match.<br></br>

              <b>Online Yoga and Fitness Challenge :</b> With a focus on health and wellness, the organization launched an Online Yoga and Fitness Challenge. Members were encouraged to share their fitness routines and yoga practices via video submissions, promoting physical well-being during lockdowns.<br></br>

              <b>E-Sports Competition :</b> Embracing digital trends, the Samaj conducted its first E-Sports Competition in August 2020. Games included popular titles like FIFA and Counter-Strike, attracting a young and enthusiastic crowd. Winners were awarded gaming accessories and vouchers.
            </p>
          </div>

          <div
            className={`section-content creative ${
              activeStep === "step03" ? "active" : ""
            }`}
          >
            <h2>In 2021-22</h2>
            <p>
              <b>Inter-Community Football Cup :</b> In 2021, the Pune Keraleeya Samaj hosted an Inter-Community Football Cup. Teams from various communities competed in a friendly yet competitive spirit, fostering unity and sportsmanship. The tournament concluded with an exciting final match and a celebratory award ceremony.<br></br>

              <b>Tennis Doubles Championship :</b> The Samaj's Tennis Doubles Championship in April 2021 attracted pairs from across Pune. The event, held at a local tennis club, showcased high-level tennis skills and coordination between partners. Winners were awarded trophies and gift vouchers.<br></br>

              <b>Cycling Rally :</b> Promoting eco-friendly transportation and fitness, the organization conducted a Cycling Rally in June 2021. Cyclists of all ages participated, riding through Pune's scenic routes. The event emphasized the importance of a healthy lifestyle and environmental conservation.
            </p>
          </div>

          <div
            className={`section-content production ${
              activeStep === "step04" ? "active" : ""
            }`}
          >
            <h2>In 2022-23</h2>
            <p>
              <b>Inter-School Sports Day :</b> In February 2022, the Pune Keraleeya Samaj organized an Inter-School Sports Day, bringing together students from various schools. Events included track and field competitions, basketball, and football matches, fostering a spirit of healthy competition among the youth.<br></br>

              <b>Mixed Martial Arts Workshop :</b> To introduce members to different forms of self-defense, the organization held a Mixed Martial Arts Workshop in April 2022. Participants learned techniques from experts, gaining confidence and skills in a supportive environment.<br></br>

              <b>Basketball Tournament :</b> The annual Basketball Tournament in July 2022 saw teams from different neighborhoods compete fiercely. The event was marked by high energy and sportsmanship, with the final match drawing a large crowd. Champions received trophies and sports gear.
            </p>
          </div>

          <div
            className={`section-content analysis ${
              activeStep === "step05" ? "active" : ""
            }`}
          >
            <h2>In 2023-24</h2>
            <p>
              <b>Marathon for Health Awareness :</b> In January 2023, the Pune Keraleeya Samaj organized a Marathon for Health Awareness. The event aimed to promote a healthy lifestyle and raise awareness about common health issues. Participants of all ages ran through Pune's scenic routes, with top finishers receiving medals.<br></br>

              <b>Inter-Community Badminton League :</b> The Inter-Community Badminton League in March 2023 brought together badminton enthusiasts from various communities. The league featured both singles and doubles matches, fostering camaraderie and competitive spirit among players.<br></br>

              <b>Open Golf Championship :</b> In May 2023, the Samaj held an Open Golf Championship at a local golf course. The event attracted amateur golfers from across the city, providing a platform to showcase their skills. Winners were awarded trophies and exclusive golf equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesDetails;
