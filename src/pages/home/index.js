import React, { useEffect, useRef } from "react";

// components
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
// import videoBg from "../../assets/videos/background.mp4";
// import videoBgAvi from "../../assets/videos/coming-soon-bg.avi";
// import videoBgMov from "../../assets/videos/coming-soon-bg.mov";
// import videoBgMp4 from "../../assets/videos/coming-soon-bg.mp4";
import { Main } from "./Main";

export default function ComingSoon() {


  return (
    <div className="w-full relative h-full flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}