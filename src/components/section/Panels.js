import React from "react";

const Panels = (props) => {
  const openModal = (e) => {
    e.preventDefault();
    props.onChangeModal();
  };
  return (
    <div className="panelContainer">
      <img src="#" alt="" />
      <div className="projectTitle">
        <h3>Project title</h3>
        <button type="button" onClick={openModal}>
          + more
        </button>
      </div>
    </div>
  );
};

export default Panels;
