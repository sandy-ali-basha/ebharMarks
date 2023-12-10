import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Slides from "./Slides";

import Start from "./components/Start";
import AboutUs from "./components/AboutUs";
import EServices from "./components/EServices";
import InteractiveMap from "./components/InteractiveMap";
import News from "./components/News";
import Partners from "./components/Partners";
import videoBg from "../../assets/videos/background.mp4";

export const Main = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div>
      {" "}
      <video muted loop controls ref={videoRef} className="bgVed">
        <source src={videoBg} type="video/mp4" />
      </video>
      <section className="flex flex-col items-center justify-center flex-grow">
        <Slides>
          <div title={"Start"} className="slide">
            <Start></Start>
          </div>
          <div title={"About Us"} className="slide">
            <AboutUs></AboutUs>
          </div>
          <div title={"E-Services"} className="slide">
            <EServices />
          </div>
          <div title={"Interactive Map"} className="slide">
            <InteractiveMap />
          </div>
          <div title={"News"} className="slide">
            <News />
          </div>
          <div title={"Partner"} className="slide">
            <Partners />
          </div>
        </Slides>
      </section>
    </div>
  );
};
