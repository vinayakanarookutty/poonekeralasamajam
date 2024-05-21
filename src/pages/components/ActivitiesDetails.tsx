import React from "react";
import { useState } from "react";
import "../../css/home.css"
 // Assume that the CSS styles are moved to App.css

const ActivitiesDetails = () => {
  const [activeStep, setActiveStep] = useState("step01");

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
        
      <h1 className="text-gray-800 font-bold mt-[125px] text-center uppercase tracking-[4px] leading-[23px]">Sports</h1>
      <br />
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            <li
              className={`step step01 ${activeStep === "step01" ? "active" : ""}`}
              onClick={() => handleStepClick("step01")}
            >
              <div className="step-inner ">HOME WORK</div>
            </li>
            <li
              className={`step step02 ${activeStep === "step02" ? "active" : ""}`}
              onClick={() => handleStepClick("step02")}
            >
              <div className="step-inner">RESPONSIVE PART</div>
            </li>
            <li
              className={`step step03 ${activeStep === "step03" ? "active" : ""}`}
              onClick={() => handleStepClick("step03")}
            >
              <div className="step-inner">Creative cREATIONS</div>
            </li>
            <li
              className={`step step04 ${activeStep === "step04" ? "active" : ""}`}
              onClick={() => handleStepClick("step04")}
            >
              <div className="step-inner">TESTIMONIALS PART</div>
            </li>
            <li
              className={`step step05 ${activeStep === "step05" ? "active" : ""}`}
              onClick={() => handleStepClick("step05")}
            >
              <div className="step-inner">OUR LOCATIONS</div>
            </li>
          </ul>

          <div id="line">
            <div
              id="line-progress"
              style={{ width: `${activeStep === "step01" ? "3%" : activeStep === "step02" ? "25%" : activeStep === "step03" ? "50%" : activeStep === "step04" ? "75%" : "100%"}` }}
            ></div>
          </div>
        </div>

        <div id="progress-content-section">
          <div className={`section-content discovery ${activeStep === "step01" ? "active" : ""}`}>
            <h2>HOME SECTION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros,
              placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam
              porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas
              malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>

          <div className={`section-content strategy ${activeStep === "step02" ? "active" : ""}`}>
            <h2>GALLERY SECTION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros,
              placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam
              porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas
              malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>

          <div className={`section-content creative ${activeStep === "step03" ? "active" : ""}`}>
            <h2>Creative CREATIONS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros,
              placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam
              porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas
              malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>

          <div className={`section-content production ${activeStep === "step04" ? "active" : ""}`}>
            <h2>TESTIMONIALS NOW</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros,
              placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam
              porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas
              malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>

          <div className={`section-content analysis ${activeStep === "step05" ? "active" : ""}`}>
            <h2>OUR LOCATIONS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros,
              placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam
              porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas
              malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesDetails;
