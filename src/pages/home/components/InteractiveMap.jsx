import React from "react";
import map from "../../../assets/images/map.svg";

function InteractiveMap() {
  return (
    <div className="Interactive_map ">
      <img
        src={map}
        alt=""
        className="animate__animated animate__slideInDown"
      />
      <div className="text animate__animated animate__fadeIn">
        <h3>Through our Interactive Map </h3>
        <p>
          Navigate through all of Saudi Arabia's Ports and marinas and Identify
          the types of licenses required to operate in each one, The map can
          also be used to find ports and marinas that are located near specific
          coastal activities, such as fishing, swimming, and diving.
        </p>
      </div>
    </div>
  );
}

export default InteractiveMap;
