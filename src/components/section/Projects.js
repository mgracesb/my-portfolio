import React from "react";
import Panels1 from "./Panels1";

const Projects = (props) => {
  const { lang, modal } = props;
  return (
    <section
      className="projectsContainer"
      id="projects"
      aria-label="projects"
      ref={props.section}
    >
      <h1 className="projectsTitle">Projects</h1>
      <Panels1
        lang={lang}
        modal={modal}
        onChangeModal={props.onChangeModal}
        title="COVID-19 Desescalada 🦠"
        descriptionEN="COVID-19 Desescalada is a web app that provides information about the deescalation phase in which a city in Spain is."
        descriptionES="COVID-19 Desescalada es una web app que informa sobre la fase de desescalada en la que se encuentra cada provincia española según la fecha."
        infoEN="- Responsive and mobile first design."
        infoES="- Diseño responsive y mobile first."
        reasonEN="Since the State of Emergency was declared in March 2020 to stop spread of coronavirus COVID-19, the Spanish government created a de-escalation plan divided in 4 phases."
        reasonES=""
        link="https://desescalada.mgrace.es/"
        image="Desescalada"
      />
      <Panels1
        lang={lang}
        modal={modal}
        onChangeModal={props.onChangeModal}
        title="Your spirit kawai animal 🐼"
        descriptionEN="Choose a kawaii animal and accessorise with cute and fun items."
        descriptionES="Elige tu animal kawaii y añade divertidos y accesorios."
        infoEN="- Responsive and mobile first design."
        infoES="- Diseño responsive y mobile first."
        reasonEN="[Beautiful things makes us happy - kurzgesagt] "
        reasonES="Las cosas bonitas nos hacen felices."
        link="https://mgracesb.github.io/your-spirit-kawaii-animal/"
        image="Kawaii"
      />
      <Panels1
        lang={lang}
        modal={modal}
        onChangeModal={props.onChangeModal}
        title="Digital card generator 📇"
        descriptionEN="Create your personalized digital card with your picture and links to your social media. Our online card maker is easy to use, and once you're done, the card can be downloaded or directly shared through your Twitter account!"
        descriptionES="Crea tu tarjeta digital y personalízala con tus datos, imagen y links a tus redes sociales. Nuestra aplicación es fácil de usar y, una vez terminada, podrás descargar tu tarjeta o compartirla a través de Twitter."
        infoEN="- Responsive and mobile first design."
        infoES="- Diseño responsive y mobile first."
        reasonEN="It allows you to keep your social profile in one place."
        reasonES="Este generador de tarjetas digitales te permite recoger tu perfil social en una sola tarjeta."
        link="https://beta.adalab.es/project-promo-i-module-3-team-2-afternoon/#/"
        image="Digital"
      />
    </section>
  );
};

export default Projects;
