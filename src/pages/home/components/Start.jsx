import React from "react";
import logo from "../../../assets/images/ebhar-logo.svg";
function Start() {
  return (
    <div className="content position-absolute">
      <div className="start ">
        <img src={logo} alt="" className="MobileEbharLogo my-6" />
        <h1 className="animate__animated animate__fadeInUp my-4 md:my-0">
          The leader of a thriving
        </h1>
        <p className="animate__animated animate__fadeInUp animate__delay-2s">
          sustainable & innovative coastal tourism ecosystem
        </p>
      </div>
    </div>
  );
}

export default Start;
