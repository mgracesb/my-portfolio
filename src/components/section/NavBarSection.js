import React from "react";

const NavBarSection = () => {
  return (
    <nav className="navBarSection">
      <ul>
        <li>
          <input type="radio" id="projects" name="selector" />
          <label htmlFor="projects">Projects</label>
          <div className="chevron enabled"></div>
        </li>
        <li>
          <input type="radio" id="experience" name="selector" />
          <label htmlFor="experience">Experience</label>
          <span className="chevron"></span>
        </li>
        <li>
          <input type="radio" id="aboutMe" name="selector" />
          <label htmlFor="aboutMe">About Me</label>
          <span className="chevron"></span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarSection;
