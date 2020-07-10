import React from "react";

const Panels = () => {
  const openModal = (e) => {
    e.preventDefault();
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
