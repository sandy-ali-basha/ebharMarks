import React from "react";
import img_1 from "../../../assets/images/Partners/1.svg";
import img_2 from "../../../assets/images/Partners/2.svg";
import img_3 from "../../../assets/images/Partners/3.svg";
import img_4 from "../../../assets/images/Partners/4.svg";
import img_5 from "../../../assets/images/Partners/5.svg";
import img_6 from "../../../assets/images/Partners/6.svg";
import img_7 from "../../../assets/images/Partners/7.svg";
import img_8 from "../../../assets/images/Partners/8.svg";
import img_9 from "../../../assets/images/Partners/9.svg";
import img_11 from "../../../assets/images/Partners/11.svg";
import img_12 from "../../../assets/images/Partners/12.svg";
import img_13 from "../../../assets/images/Partners/13.svg";
import img_14 from "../../../assets/images/Partners/14.svg";
import img_15 from "../../../assets/images/Partners/15.svg";
import img_16 from "../../../assets/images/Partners/16.svg";

function Partners() {
  const images = [
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8,
    img_9,
    img_11,
    img_12,
    img_13,
    img_14,
    img_15,
    img_16,
  ];
  return (
    <>
      <div className="Partners animate__animated animate__fadeIn">
        {images.map((item, index) => (
          <div className="img">
            <img src={item} key={index} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Partners;
