import React from "react";
import { Route, Routes } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';

// Pages
import Main from "./pages/home";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/coming-soon" exact element={<Main />} />
      <Route path="/login" exact element={<Login />} />
    </Routes>
  );
}

export default App;
