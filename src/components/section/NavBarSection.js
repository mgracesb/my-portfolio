import React from "react";

const NavBarSection = () => {
  return (
    <nav className="navBarSection">
      <ul>
        <li>
          <input type="radio" id="projects" name="selector" />
          <div className="chevron enabled"></div>
          <label htmlFor="projects">Projects</label>
        </li>
        <li>
          <input type="radio" id="experience" name="selector" />
          <div className="chevron"></div>
          <label htmlFor="experience">Experience</label>
        </li>
        <li>
          <input type="radio" id="aboutMe" name="selector" />
          <div className="chevron"></div>
          <label htmlFor="aboutMe">About Me</label>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarSection;
