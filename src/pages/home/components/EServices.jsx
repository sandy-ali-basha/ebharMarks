import React from "react";
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

import { Link } from "react-router-dom";

function EServices() {
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
      <div className="E_services_content animate__animated animate__fadeIn">
        <img src={EServicesTitle} alt="" />
        <div className="E_services">
          {items.map((item, index) => (
            <Link to="/login" key={index}>
              <div className="Card">
                <img src={item.icon} alt="" />
                <p>{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default EServices;
