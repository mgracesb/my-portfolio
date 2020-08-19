import React from "react";
import Panels1 from "./Panels1";

const Projects = (props) => {
  const { lang } = props;
  return (
    <section
      className="projectsContainer"
      id="projects"
      aria-label="projects"
      ref={props.section}
    >
      <h1 className="projectsTitle">Projects</h1>
      <Panels1
        lang={props.lang}
        modal={props.modal}
        onChangeModal={props.onChangeModal}
        title="COVID-19 Desescalada"
        slogan=""
        description=""
        reason=""
        technologies=""
        link=""
        image="Desescalada"
      />
      <Panels1
        lang={props.lang}
        modal={props.modal}
        onChangeModal={props.onChangeModal}
        title="your spirit kawai animal"
        slogan=""
        description=""
        reason=""
        technologies=""
        link=""
        image="Kawaii"
      />
      <Panels1
        lang={props.lang}
        modal={props.modal}
        onChangeModal={props.onChangeModal}
        title="Digital card generator"
        slogan=""
        description=""
        reason=""
        technologies=""
        link=""
        image="Digital"
      />
    </section>
  );
};

export default Projects;
