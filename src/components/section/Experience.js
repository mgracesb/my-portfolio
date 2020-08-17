import React from "react";
import Panels2 from "./Panels2";

const Experience = (props) => {
  return (
    <section
      className="experienceContainer"
      id={props.id}
      aria-label="experience"
    >
      <h1 className="experienceTitle">Experience</h1>
      <Panels2
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
      <Panels2
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
      <Panels2
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
    </section>
  );
};

export default Experience;
