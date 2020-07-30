import React from "react";
import Panels from "./Panels2";

const Projects = (props) => {
  return (
    <section
      className="projectsContainer"
      id="projects"
      aria-label="projects"
      ref={props.section}
    >
      <h1 className="projectsTitle">Projects</h1>
      <Panels
        modal={props.modal}
        onChangeModal={props.onChangeModal}
        title="COVID-19 Desescalada"
        slogan=""
        description=""
        reason=""
        technologies=""
        link=""
        image="desescalada"
      />
      <Panels
        modal={props.modal}
        onChangeModal={props.onChangeModal}
        title="your spirit kawai animal"
        slogan=""
        description=""
        reason=""
        technologies=""
        link=""
        image="kawaii-animal"
      />
      <Panels
        modal={props.modal}
        onChangeModal={props.onChangeModal}
        title="Digital card generator"
        slogan=""
        description=""
        reason=""
        technologies=""
        link=""
        image="digital-cards"
      />
    </section>
  );
};

export default Projects;
