import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/ebhar-logo.svg";
import Logo_blue from "../../assets/images/logo_blue.svg";
// import globe from "../../assets/images/globe.svg";
import person from "../../assets/images/person.svg";
import close from "../../assets/images/close_blue.svg";
import search from "../../assets/images/searsh.svg";
import search_blue from "../../assets/images/searsh_blue.svg";
import { e_Services } from "../../store/e_Services";

// assets
import Linkedin from "../../assets/images/Linked_In_blue.svg";
import Instagram from "../../assets/images/insta_blue.svg";
import Twitter from "../../assets/images/twitter_blue.svg";
import navIcon from "../../assets/images/NavIcon.png";

function Header() {
  const [show, setShow] = e_Services((state) => [state.show, state.setShow]);

  const [showNav, setShowNav] = useState(false);
  return (
    <>
      {/* //* for mobile  */}
      {showNav ? (
        <div className={`mobileNav animate__animated animate__fadeInRight `}>
          <div className="py-8 px-5 w-full flex items-center justify-end">
            <Link to="/" title="" className="px-2">
              <img src={search_blue} alt="" />
            </Link>
            <div onClick={() => setShowNav(false)} className="px-2">
              <img src={close} alt="" />
            </div>
          </div>
          <div className="flex py-8 items-between flex-col justify-between mainItems text-white">
            <ul className="text-center">
              <Link
                to="/"
                onClick={() => {
                  setShow(0);
                  setShowNav(false);
                }}
                title=""
                className={`px-2 text-lg ${show === 0 ? "activeHeder" : ""}`}
              >
                <p>HOME</p>
              </Link>
              <Link
                onClick={() => {
                  setShow(2);
                  setShowNav(false);
                }}
                title=""
                className={`px-2 ${show === 2 ? "activeHeder" : ""}`}
              >
                <p>E-services</p>
              </Link>
            </ul>
            <ul className="flex items-center flex-col justify-center gap-5">
              {" "}
              <Link to="/" title="" className="px-2 pe-5">
                <img className="Logo_blue" src={Logo_blue} alt="" />
              </Link>
              <Link to="/" title="" className="px-2 pe-5">
                All rights reserved to Ebhar 2023
              </Link>
              <ul className="flex-shrink-0 flex items-center ">
                <Link href="/" title="" className="px-2 pe-5">
                  <img className="" src={Linkedin} alt="" />
                </Link>
                <Link href="/" title="" className="px-2">
                  <img className="" src={Instagram} alt="" />
                </Link>
                <Link href="/" title="" className="px-2">
                  <img className="" src={Twitter} alt="" />
                </Link>
              </ul>
            </ul>
          </div>
        </div>
      ) : (
        " "
      )}
      <header
        className="absolute w-full top-0 z-10 py-10"
        x-data="{expanded: false}"
      >
        <div className=" mx-auto footerDiv">
          <div className="flex items-center justify-between text-white">
            <ul className="flex-shrink-0 flex items-center ">
              <Link to="/" title="" className="px-2 pe-5">
                <img className="" src={Logo} alt="" />
              </Link>
              <Link
                to="/"
                onClick={() => {
                  setShow(0);
                }}
                title=""
                className={`px-2 ${show === 0 ? "activeHeder" : ""}`}
              >
                <p>HOME</p>
              </Link>
              <Link
                onClick={() => {
                  setShow(2);
                }}
                title=""
                className={`px-2 ${show === 2 ? "activeHeder" : ""}`}
              >
                <p>E-services</p>
              </Link>
              {/* <Link to="/" title="" className="px-2">
              <p>Yacht</p>
            </Link>
            <Link to="/" title="" className="px-2">
              <p>Cruise</p>
            </Link>
            <Link to="/" title="" className="px-2">
              <p>Marine</p>
            </Link> */}
            </ul>
            <div className="flex-shrink-1 flex items-center">
              {/* <Link to="/" title="" className="pe-5">
              <p>Interactive Map </p>
            </Link> */}
              {/* <Link to="/" title="" className="px-2">
              <img src={globe} alt="" />
            </Link> */}

              <Link to="/login" title="" className="px-2">
                <img src={person} alt="" />
              </Link>

              <Link to="/" title="" className="px-2">
                <img src={search} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="navIcon">
          <img onClick={() => setShowNav(true)} src={navIcon} alt="" />
        </div>
      </header>
    </>
  );
}

export default Header;
