import React, { useState } from "react";
import img from "../../../assets/images/EBHAR.svg";

function AboutUs() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div className="AboutUsContent content animate__animated animate__fadeIn">
        <div className="AboutUs">
          <h2>
            <img src={img} alt="logo" />
          </h2>
          <p>
            This text is an example of text that can be replaced in the same
            space. This text was generated from the Arabic text generator, where
            you can generate such text or many other texts in addition to
            increasingincreasing the number of letters that the application
            generates.
          </p>
          <button onClick={() => setDisplay(!display)}>Read More</button>
        </div>
      </div>
      <div
        className={`dialog animate__animated ${
          display ? "animate__fadeInUp" : "animate__fadeOutUp"
        }`}
        style={{ display: display ? "block" : "none" }}
      >
        <div className="xIcon" onClick={() => setDisplay(!display)}>
          x
        </div>
        <div className="dialogContent"></div>
      </div>
    </>
  );
}

export default AboutUs;
