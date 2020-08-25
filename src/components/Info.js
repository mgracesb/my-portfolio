import React from "react";
// import BreadCrumbs from "./section/BreadCrumbs";
import NavBarSection from "./section/NavBarSection";
import Projects from "./section/Projects";
import Experience from "./section/Experience";
import AboutMe from "./section/AboutMe";

const Info = (props) => {
  const { lang } = props;
  return (
    <main className="infoContainer">
      <NavBarSection lang={lang} />

      <Projects id="projects" lang={lang} />

      <Experience id="experience" lang={lang} />

      <AboutMe id="aboutme" lang={lang} />
    </main>
  );
};

export default Info;
