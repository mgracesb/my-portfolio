import React from "react";
import RRSS from "./RRSS";
import AboutMeTxt from "./AboutMeTxt";

const AboutMe = (props) => {
  return (
    <section
      className="aboutMeContainer"
      id="aboutme"
      aria-label="about"
      ref={props.section}
    >
      <h1 className="aboutMeTitle">About me</h1>
      <div className="aboutMeBorder">
        <div className="aboutMeImg">
          <div className="crystals">
            <div className="crystal_01"></div>
            <div className="crystal_02"></div>
            <div className="crystal_03"></div>
          </div>
          {/* <img src={Photo} alt="" className="photo" /> */}
        </div>
        <div className="aboutMeTextContainer">
          <h5>Mercy Shyu</h5>
          <AboutMeTxt />
          <AboutMeTxt />
          <AboutMeTxt />
          <AboutMeTxt />
          <RRSS />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
