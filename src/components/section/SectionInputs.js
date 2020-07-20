import React from "react";

const SectionInputs = (props) => {
  const test = (e) => {
    e.preventDefault();
    console.log(props);
  };

  return (
    <a href="#${props.value}" onClick={test} className="">
      <span className="chevron">
        <i className="fas fa-bolt"></i>
      </span>
      {props.value}
    </a>
  );
};

export default SectionInputs;
