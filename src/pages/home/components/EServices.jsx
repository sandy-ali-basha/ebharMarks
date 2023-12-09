import React, { useEffect, useRef } from "react";
import videoBg from "../../../assets/videos/background.mp4";
import building from "../../../assets/images/icons/building.svg";
import chartering from "../../../assets/images/icons/chartering.svg";
import gruise from "../../../assets/images/icons/gruise.svg";
import license from "../../../assets/images/icons/license.svg";
import marina from "../../../assets/images/icons/marina.svg";
import operatorShip from "../../../assets/images/icons/operatorShip.svg";
import privateYachts from "../../../assets/images/icons/privateYachts.svg";
import ships from "../../../assets/images/icons/ships.svg";
import yacht from "../../../assets/images/icons/yacht.svg";
import EServicesTitle from "../../../assets/images/E-services.svg";

function EServices() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // videoRef.current.play();
    }
  }, []);

  const items = [
    { icon: building, text: "Cruise Organizer License" },
    { icon: chartering, text: "Tourist Marina Operator License" },
    { icon: gruise, text: "Tourist Navigational Agent License" },
    { icon: license, text: "Large Yacht Charter Company License" },
    { icon: marina, text: "Chartering Permit for Large Yachts" },
    { icon: operatorShip, text: "Navigation Permit for Cruise Ships" },
    { icon: privateYachts, text: "Cruise Ship Operator License" },
    { icon: ships, text: "Cruising Permit for Visiting Private Yachts" },
    { icon: yacht, text: "License for Building Tourist Marina" },
  ];

  return (
    <>
      <video muted loop playsInline ref={videoRef} className="bgVed">
        <source src={videoBg} type="video/webm" />
      </video>
      <div className="E_services_content">
        <img src={EServicesTitle} alt="" />
        <div className="E_services">
          {items.map((item, index) => (
            <div key={index} className="Card">
              <img src={item.icon} alt="" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EServices;
