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
        reasonEN="Since the State of Emergency was declared in March 2020 to stop spread of coronavirus COVID-19, the Spanish government created a de-escalation plan divided by phases."
        reasonES=""
        link="https://desescalada.mgrace.es/"
        image="Desescalada"
      />
      <Panels1
        lang={lang}
        modal={modal}
        onChangeModal={props.onChangeModal}
        title="Your spirit kawai animal 🐼"
        descriptionEN=""
        descriptionES=""
        reasonEN=""
        reasonES=""
        link=""
        image="Kawaii"
      />
      <Panels1
        lang={lang}
        modal={modal}
        onChangeModal={props.onChangeModal}
        title="Digital card generator 📇"
        descriptionEN=""
        descriptionES=""
        reasonEN=""
        reasonES=""
        link=""
        image="Digital"
      />
    </section>
  );
};

export default Projects;
