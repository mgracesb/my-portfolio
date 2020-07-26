import React from "react";
import { Link } from "react-router-dom";

const NavBarSection = () => {
  return (
    <nav className="navBarSection">
      <Link className="link" to="/info/projects">
        <span className="chevron">
          <i className="fas fa-bolt"></i>
        </span>
        Projects
      </Link>

      <Link className="link" to="/info/experience">
        <span className="chevron">
          <i className="fas fa-bolt"></i>
        </span>
        Experience
      </Link>

      <Link className="link" to="/info/aboutme">
        <span className="chevron">
          <i className="fas fa-bolt"></i>
        </span>
        About me
      </Link>
    </nav>
  );
};

export default NavBarSection;
