import React from "react";
import Panels2 from "./Panels2";

const Experience = (props) => {
  const { lang } = props;
  return (
    <section
      className="experienceContainer"
      id={props.id}
      aria-label="experience"
    >
      <h1 className="experienceTitle">Experience</h1>
      <Panels2
        lang={lang}
        title="Secretary & Office manager"
        description=""
        reason=""
        technologies=""
        link=""
        image="Desescalada"
      />
      <Panels2
        lang={lang}
        title="Community Manager at Start-up"
        description=""
        reason=""
        technologies=""
        link=""
        image="Desescalada"
      />
      <Panels2
        lang={lang}
        title="Purchase department & Marketing"
        description=""
        reason=""
        technologies=""
        link=""
        image="Desescalada"
      />
      <Panels2
        lang={lang}
        title="Restaurant Manager & Co-owner"
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
