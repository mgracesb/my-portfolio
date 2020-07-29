import React from "react";
import SectionInputs from "./SectionInputs";
import ScrollTo from "react-scroll-into-view";

const NavBarSection = () => {
  return (
    <nav className="navBarSection">
      <ul>
        <li key="projects">
          <ScrollTo selector="#projects">
            <SectionInputs value="projects" />
          </ScrollTo>
        </li>
        <li key="experience">
          <ScrollTo selector="#experience">
            <SectionInputs value="experience" />
          </ScrollTo>
        </li>
        <li key="aboutme">
          <ScrollTo selector="#aboutme">
            <SectionInputs value="aboutme" />
          </ScrollTo>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarSection;
