import React from "react";

const SectionInputs = (props) => {
  return (
    <>
      <input type="radio" id={props.id} name="selector" />
      <div className="chevron enabled"></div>
      <label htmlFor={props.id}>{props.id}</label>
    </>
  );
};

export default SectionInputs;
