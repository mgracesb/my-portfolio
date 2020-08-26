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
            line2EN="I enjoy doing my best and producing quality work by finding the right solution for each problem. I love how by typing lines of code I can bring creativity and building processes together."
            line3EN="When I am not coding, you can find me in my sneakers burning calories, making a DIY project I found on Youtube or just chilling by the pool."
            line1ES="¡Hola! soy Mercy, Frontend Web Developer viviendo Madrid."
            line2ES="Disfruto elaborando trabajo de calidad y me vuelco en lo que hago. Me encanta cómo, al escribir líneas de código, puedo unir la creatividad y los procesos de construcción."
            line3ES="Cuando no estoy programando, puedes encontrarme haciendo deporte, manualidades que encontré en Youtube o simplemente relajándome en la piscina."
          />
          <RRSS />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
