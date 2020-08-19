import React from "react";
// import BreadCrumbs from "./section/BreadCrumbs";
import NavBarSection from "./section/NavBarSection";
import Projects from "./section/Projects";
import Experience from "./section/Experience";
import AboutMe from "./section/AboutMe";

const Info = (props) => {
  return (
    <main className="infoContainer">
      <NavBarSection lang={props.lang} />

      <Projects id="projects" />

      <Experience id="experience" />

      <AboutMe id="aboutme" />
    </main>
  );
};

export default Info;
