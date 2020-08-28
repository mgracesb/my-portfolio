import React from "react";

const AboutMeTxt = (props) => {
  const { lang, line1EN, line1ES, line2EN, line2ES, line3EN, line3ES } = props;
  return (
    <div className="txt">
      <p className={lang === false ? "active" : "inactive"}>More about me:</p>
      <p className={lang !== false ? "active" : "inactive"}>Más sobre mí:</p>
      <p className={lang === false ? "active" : "inactive"}>{line1EN}</p>
      <p className={lang === false ? "active" : "inactive"}>{line2EN}</p>
      <p className={lang === false ? "active" : "inactive"}>{line3EN}</p>
      <p className={lang !== false ? "active" : "inactive"}>{line1ES}</p>
      <p className={lang !== false ? "active" : "inactive"}>{line2ES}</p>
      <p className={lang !== false ? "active" : "inactive"}>{line3ES}</p>
    </div>
  );
};

export default AboutMeTxt;
