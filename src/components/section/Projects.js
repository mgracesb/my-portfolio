import React from "react";
import Panels from "./Panels";

const Projects = (props) => {
  return (
    <section className="projectsContainer" id="projects">
      <h1 className="projectsTitle">Projects</h1>
      <Panels modal={props.modal} onChangeModal={props.onChangeModal} />
      <Panels modal={props.modal} onChangeModal={props.onChangeModal} />
      <Panels modal={props.modal} onChangeModal={props.onChangeModal} />
    </section>
  );
};

export default Projects;
