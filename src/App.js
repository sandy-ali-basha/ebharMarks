import React from "react";
import { Route, Routes } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

// Pages
import Main from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/coming-soon" exact element={<Main />} />
    </Routes>
  );
}

export default App;
