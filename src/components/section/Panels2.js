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
          <p className="t-active"></p>
          <p className={lang === false ? "active" : "inactive"}>{line1EN}</p>
          <p className={lang !== false ? "active" : "inactive"}>{line1ES}</p>
          <p className={lang === false ? "active" : "inactive"}>{line2EN}</p>
          <p className={lang !== false ? "active" : "inactive"}>{line2ES}</p>
          <p className={lang === false ? "active" : "inactive"}>{line3EN}</p>
          <p className={lang !== false ? "active" : "inactive"}>{line3ES}</p>
        </div>
      </div>
    </div>
  );
};

export default Panels2;
