import React from "react";
import RRSS from "./RRSS";
import AboutMeTxt from "./AboutMeTxt";

const AboutMe = (props) => {
  const { lang } = props;
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
          <AboutMeTxt
            lang={lang}
            line1EN="Hi there! My name is Mercy and I'm a Spanish Frontend Web Developer based in Madrid."
            line2EN="I love building I enjoy doing my best and producing quality work by finding the right solution for each problem."
            line3EN="I usually spend my days coding and learning new things. When I am not coding, you can find me"
            line1ES=""
            line2ES=""
            line3ES=""
          />
          <RRSS />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
