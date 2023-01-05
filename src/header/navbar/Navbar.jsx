import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";

import "./navbar.css";
function Navbar() {
  return (
    <nav class="main-nav">
      <div className="container">
        <ul className="left-links">
          <li>
            <a href="#">
              <div className="icon">
                <CgMenuGridO className="logo" />
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="text">
              Outlook
            </a>
          </li>
          <li></li>
        </ul>
        
        <ul className="right-links">
          <li>
            <a href="#">
              <div className="icon right-i">
                <FaUserCircle className="logo" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
