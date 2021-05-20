import React from "react";
import RRSS from "./RRSS";
import AboutMeTxt from "./AboutMeTxt";
import Form from "./Form";
import Logo from "../../imgs/logo.png";

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
          <div className="contactForm">
            <Form lang={props.lang} />
          </div>
        </div>
        <div className="aboutMeTextContainer">
          <img src={Logo} className="aboutme__logo" alt="logo" />
          <AboutMeTxt
            lang={lang}
            line1EN="👋🏻 Hi there! My name is Mercy and I'm a Spanish Frontend Web Developer based in Madrid."
            line2EN="👩🏻‍💻 I enjoy doing my best and producing quality work by finding the right solution for each problem. I love how by typing lines of code I can bring my ideas (or other people's ideas) to life but what excites me the most is the non-stop learning process."
            line3EN="🎯 When I am not coding, you can find me in my sneakers burning calories, playing online games or making a DIY project from Youtube-- I find building processes really fascinating."
            line1ES="👋🏻 ¡Hola! soy Mercy, Frontend Web Developer viviendo Madrid."
            line2ES="👩🏻‍💻 Disfruto elaborando trabajo de calidad y me vuelco en lo que hago. Me encanta cómo, al escribir líneas de código, hago realidad mis ideas (o las de otr@s), pero lo que encuentro más emocionante es el proceso de aprender y mejorar cada día."
            line3ES="🎯 Cuando no estoy programando, puedes encontrarme haciendo deporte, jugando a juegos online o haciendo manualidades que encontré en Youtube-- si...me fascinan los procesos de construcción."
          />
          <RRSS />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
