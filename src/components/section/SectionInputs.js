import React from "react";

const SectionInputs = (props) => {
  return (
    <div className="link">
      <i className="fas fa-chevron-right edit"></i>
      <h3 className="navBarTitle">{props.value}</h3>
    </div>
  );
};

export default SectionInputs;
