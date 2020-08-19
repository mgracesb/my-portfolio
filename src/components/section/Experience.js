import React from "react";
import Panels2 from "./Panels2";

const Experience = (props) => {
  const { lang, modal } = props;
  return (
    <section
      className="experienceContainer"
      id={props.id}
      aria-label="experience"
    >
      <h1 className="experienceTitle">Experience</h1>
      <Panels2
        lang={lang}
        modal={modal}
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
        lang={lang}
        modal={modal}
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
        lang={lang}
        modal={modal}
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
