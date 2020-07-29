import React from "react";

const SectionInputs = (props) => {
  return (
    <div className="link">
      <i className="fas fa-chevron-right edit"></i>
      <h4 className="navBarTitle">{props.value}</h4>
    </div>
  );
};

export default SectionInputs;
