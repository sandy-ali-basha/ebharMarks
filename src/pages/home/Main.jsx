import React from "react";
import { useTranslation } from "react-i18next";
import Slides from "./Slides";

import Start from "./components/Start";
import AboutUs from "./components/AboutUs";
import EServices from "./components/EServices";
import InteractiveMap from "./components/InteractiveMap";

export const Main = () => {
  const { t } = useTranslation();

  return (
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
          {/* <Start></Start> */}
        </div>
        <div title={"Partner"} className="slide">
          {/* <Start></Start> */}
        </div>
      </Slides>
    </section>
  );
};
