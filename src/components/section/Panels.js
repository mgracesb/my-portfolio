import React from "react";

const Panels = (props) => {
  const openModal = (e) => {
    e.preventDefault();
    props.onChangeModal();
  };
  return (
    <div className="panelContainer">
      <img src="#" alt="" />
      <h3>Title</h3>
      <button type="button" onClick={openModal}>
        + more
      </button>
    </div>
  );
};

export default Panels;
