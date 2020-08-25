import React from "react";

const Panels2 = (props) => {
  const {
    lang,
    title,
    company,
    line1EN,
    line2EN,
    line3EN,
    line1ES,
    line2ES,
    line3ES,
  } = props;
  console.log(props);
  return (
    <div className="panels2Container">
      {/* <img src="#" alt="" /> */}
      <div className="panels2Content">
        <h3>{title}</h3>
        <p className="company">{company}</p>
        <div className="panels2Txt">
          <p className={lang === false ? "t-active" : "inactive"}>
            description
          </p>
          <p className={lang !== false ? "t-active" : "inactive"}>
            descripción
          </p>
          <p className={lang === false ? "active" : "inactive"}>{line1EN}</p>
          <p className={lang !== false ? "t-active" : "inactive"}>{line1ES}</p>
        </div>
      </div>
    </div>
  );
};

export default Panels2;
