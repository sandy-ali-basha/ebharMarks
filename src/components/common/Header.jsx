import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/ebhar-logo.svg";
// import globe from "../../assets/images/globe.svg";
import person from "../../assets/images/person.svg";
import search from "../../assets/images/searsh.svg";

function Header() {
  return (
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
            <Link to="/" title="" className="px-2 home">
              <p>HOME</p>
            </Link>
            <Link to="/" title="" className="px-2 ">
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

            <Link to="/" title="" className="px-2">
              <img src={person} alt="" />
            </Link>

            <Link to="/" title="" className="px-2">
              <img src={search} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
