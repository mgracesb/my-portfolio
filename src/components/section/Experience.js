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
        line1EN="+ Web design (UI)."
        line2EN="+ Content creator."
        line3EN="+ Handle day-to-day operations and CEO assist."
        line1ES="+ Diseño web (UI)."
        line2ES="+ Creación de contenidos."
        line3ES="+ Manejo de operaciones y asistencia a CEO."
      />
      <Panels2
        lang={lang}
        title="Purchase department & Marketing"
        company="AWR & Uniecology Lab."
        line1EN="+ International and national purchase management."
        line2EN="+ Creation of databases and data management."
        line3EN="+ Content creator and community manager."
        line1ES="+ Gestión de compras nacionales e internacionales."
        line2ES="+ Creación y gestión de base de datos de almacén."
        line3ES="+ Community manager y creación de contenidos."
      />
      <Panels2
        lang={lang}
        title="Restaurant Manager & Co-owner"
        company="Restaurante Gracia y Paz"
        line1EN="+ Team management, up to 8 people."
        line2EN="+ Resources management."
        line3EN=""
        line1ES="+ Gestión de equipo de 8 personas."
        line2ES="+ Gestión de recursos."
        line3ES=""
      />
    </section>
  );
};

export default Experience;
