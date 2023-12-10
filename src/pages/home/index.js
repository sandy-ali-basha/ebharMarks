import React from "react";

// components
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { Main } from "./Main";
import 'animate.css';

export default function ComingSoon() {
  return (
    <div className="w-full relative h-full flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}