import React from "react";
import { Link } from "react-router-dom";

const NavBarHeader = () => {
  return (
    <nav>
      <ul className="navBarHeader">
        <li id="homeButton">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li id="infoButton">
          <Link className="link" to="/info">
            Info
          </Link>
        </li>
        <span className="menu-highlight"></span>
      </ul>
    </nav>
  );
};

export default NavBarHeader;
