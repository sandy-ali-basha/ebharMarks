import React, { useEffect, useRef } from "react";
import videoBg from "../../../assets/videos/background.mp4";
import map from "../../../assets/images/map.svg";

function InteractiveMap() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // videoRef.current.play();
    }
  }, []);

  return (
    <>
      <video muted loop playsInline ref={videoRef} className="bgVed">
        <source src={videoBg} type="video/webm" />
      </video>
      <div className="Interactive_map">
        <img src={map} alt="" />
        <div className="text">
          <h3>Through our Interactive Map </h3>
          <p>
            Navigate through all of Saudi Arabia's Ports and marinas and
            Identify the types of licenses required to operate in each one, The
            map can also be used to find ports and marinas that are located near
            specific coastal activities, such as fishing, swimming, and diving.
          </p>
        </div>
      </div>
    </>
  );
}

export default InteractiveMap;
