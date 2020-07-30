import React from "react";

const Panels = (props) => {
  const openModal = (e) => {
    e.preventDefault();
    props.onChangeModal(e.currentTarget.value);
  };
  return (
    <div className="panelContainer">
      <img src="#" alt="" />
      <div className="projectTitle">
        <h3>{props.title}</h3>
        <button type="button" value={props.modal} onClick={openModal}>
          + more
        </button>
      </div>
    </div>
  );
};

export default Panels;
