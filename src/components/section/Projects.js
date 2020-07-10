import React from "react";
import Panels from "./Panels";

const Projects = (props) => {
  console.log(props);
  return (
    <section className="projects">
      <Panels onChangeModal={props.onChangeModal} />
      <Panels onChangeModal={props.onChangeModal} />
      <Panels onChangeModal={props.onChangeModal} />
    </section>
  );
};

export default Projects;
