import React from "react";

const SectionInputs = (props) => {
  const { lang, value, id } = props;
  return (
    <div className="link">
      <i className="fas fa-chevron-right edit"></i>
      <h3 className="navBarTitle">{lang !== false ? id : value}</h3>
    </div>
  );
};

export default SectionInputs;
