import React from "react";
import { Link } from "react-router-dom";

const NavBarSection = () => {
  return (
    <nav className="navBarSection">
      <ul>
        <li>
          <Link className="link" to="/info/projects">
            {/* <SectionInputs value="projects" /> */}
            <span className="chevron">
              <i className="fas fa-bolt"></i>
            </span>
          </Link>
        </li>
        <li>
          <Link className="link" to="/info/experience">
            {/* <SectionInputs value="experience" /> */}
            <span className="chevron">
              <i className="fas fa-bolt"></i>
            </span>
          </Link>
        </li>
        <li>
          <Link className="link" to="/info/aboutme">
            {/* <SectionInputs value="about-me" /> */}
            <span className="chevron">
              <i className="fas fa-bolt"></i>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarSection;
