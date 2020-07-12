import React from "react";
import SectionInputs from "./SectionInputs";

const NavBarSection = () => {
  const selectSection = () => {};
  return (
    <nav className="navBarSection">
      <ul>
        <li value="projects" onClick={selectSection}>
          <SectionInputs id="projects" />
        </li>
        <li value="experience" onClick={selectSection}>
          <SectionInputs id="experience" />
        </li>
        <li value="about me" onClick={selectSection}>
          <SectionInputs id="about me" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBarSection;
