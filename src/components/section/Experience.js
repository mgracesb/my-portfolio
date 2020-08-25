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
        company="Banco do Brasil"
        line1EN="+ Executive support, organized company events and meetings."
        line2EN="+ Allocate and monitor resources."
        line3EN="+ Everyday communication and text translation to
        English."
        line1ES="+ Asistencia a alta dirección, organización de agendas y planificación de eventos."
        line2ES="+ Organización y gestión de recursos."
        line3ES="+ Comunicación internacional diaria y traducción de textos al inglés."
      />
      <Panels2
        lang={lang}
        title="Community Manager - Start up"
        company="Data Dogwatch"
        descriptionEN=""
        descriptionES=""
        line1EN=""
        line2EN=""
        line3EN=""
        line1ES=""
        line2ES=""
        line3ES=""
      />
      <Panels2
        lang={lang}
        title="Purchase department & Marketing"
        company="AWR & Uniecology Lab."
        descriptionEN=""
        descriptionES=""
        line1EN=""
        line2EN=""
        line3EN=""
        line1ES=""
        line2ES=""
        line3ES=""
      />
      <Panels2
        lang={lang}
        title="Restaurant Manager & Co-owner"
        company="Restaurante Gracia y Paz"
        descriptionEN=""
        descriptionES=""
        line1EN=""
        line2EN=""
        line3EN=""
        line1ES=""
        line2ES=""
        line3ES=""
      />
    </section>
  );
};

export default Experience;
