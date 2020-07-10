import React from "react";
import { Link } from "react-router-dom";

const NavBarHeader = () => {
  return (
    <nav>
      <ul className="navBarHeader">
        <li id="homeButton">
          <Link to="/">Home</Link>
        </li>
        <li id="infoButton">
          <Link to="/info">Info</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarHeader;
