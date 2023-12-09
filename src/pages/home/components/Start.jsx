import React, { useEffect, useRef } from "react";
import videoBg from "../../../assets/videos/background.mp4";

function Start() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <>
      <video muted loop controls ref={videoRef} className="bgVed">
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="content">
        <div className="start">
          <h1>The leader of a thriving</h1>
          <p>sustainable & innovative coastal tourism ecosystem</p>
        </div>
      </div>
    </>
  );
}

export default Start;
