import React from "react";
import img from "../../../assets/images/EBHAR.svg";
import Xicon from "../../../assets/images/icons/xIxcon.svg";
import Vector from "../../../assets/images/icons/Vector.svg";
import { dataStore } from "../../../store/dataStore";
import building from "../../../assets/images/icons/building.svg";
import chartering from "../../../assets/images/icons/chartering.svg";
import gruise from "../../../assets/images/icons/gruise.svg";
import license from "../../../assets/images/icons/license.svg";
import marina from "../../../assets/images/icons/marina.svg";
import operatorShip from "../../../assets/images/icons/operatorShip.svg";
import privateYachts from "../../../assets/images/icons/privateYachts.svg";
import ships from "../../../assets/images/icons/ships.svg";
import yacht from "../../../assets/images/icons/yacht.svg";
import Logomode from "../../../assets/images/Isolation_Mode.svg";

function AboutUs() {
  // const [display, setDisplay] = useState(false);
  // * States
  const [display, setDisplay] = dataStore((state) => [
    state.display,
    state.setDisplay,
  ]);
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
      <div className="AboutUsContent content animate__animated animate__fadeIn">
        <div className="AboutUs">
          <h2>
            <img src={img} alt="logo" />
          </h2>
          <p>
            This text is an example of text that can be replaced in the same
            space. This text was generated from the Arabic text generator, where
            you can generate such text or many other texts in addition to
            increasingincreasing the number of letters that the application
            generates.
          </p>
          <button onClick={() => setDisplay(true)}>Read More</button>
        </div>
      </div>
      <div
        className={`dialog animate__animated ${
          display ? "animate__fadeInUp" : "animate__fadeOutUp"
        }`}
        style={{ display: display ? "block" : "none" }}
      >
        <div className="xIcon" onClick={() => setDisplay(false)}>
          <img src={Xicon} alt="" />
        </div>
        <div className="dialogContent py-10">
          <section className="p-5 flex-col flex justify-center items-center gap-5">
            <img className="icon" src={Vector} alt="" />
            <h5 className="vision">Vision</h5>
            <p>
              A thriving coastal tourism industry in Saudi Arabia, sustained by
              reliable and world-class customer services.
            </p>
          </section>
          <section className="Mission flex-col flex justify-center items-center gap-5 p-5">
            <h5>Mission</h5>
            <p>
              Our mission is to enhance the provided service and elevate the
              overall customer experience by facilitating seamless access to
              essential services via one electronic platform, through which we
              aim to optimize government spending and returns, foster
              public-private partnerships, and attract investors.
            </p>
          </section>
          <section className="py-10">
            <h5 className="ServicesTitle">E-Services</h5>
            <div className="E_services px-14">
              {items.map((item, index) => (
                <div key={index} className="Card">
                  <img src={item.icon} alt="" />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <img className="icon mx-auto text-center" src={Logomode} alt="" />
          </section>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
