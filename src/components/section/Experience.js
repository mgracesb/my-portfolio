import React from "react";
import Panels from "./Panels";

const Experience = (props) => {
  return (
    <section className="experienceContainer">
      <h1 className="experienceTitle">Experience</h1>
      <Panels modal={props.modal} onChangeModal={props.onChangeModal} />
      <Panels modal={props.modal} onChangeModal={props.onChangeModal} />
      <Panels modal={props.modal} onChangeModal={props.onChangeModal} />
    </section>
  );
};

export default Experience;
