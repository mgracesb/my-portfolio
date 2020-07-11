import React from "react";
import Panels from "./Panels";

const Projects = (props) => {
  console.log(props);
  return (
    <section className="projectsContainer">
      <h1 className="projectsTitle">Projects</h1>
      <Panels onChangeModal={props.onChangeModal} />
      <Panels onChangeModal={props.onChangeModal} />
      <Panels onChangeModal={props.onChangeModal} />
    </section>
  );
};

export default Projects;
