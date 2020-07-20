import React from "react";
import SectionInputs from "./SectionInputs";

const NavBarSection = () => {
  return (
    <nav className="navBarSection">
      <ul>
        <li>
          <SectionInputs value="projects" />
        </li>
        <li>
          <SectionInputs value="experience" />
        </li>
        <li>
          <SectionInputs value="about-me" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBarSection;
