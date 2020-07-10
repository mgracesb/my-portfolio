import React from "react";

const Modal = (props) => {
  if (props.modal === true) {
    return (
      <div className="modal active">
        HI I'm a Modal
        <button type="button" className="closeModal" id="closeModal">
          x
        </button>
      </div>
    );
  } else {
    return <div className="modal disabled">No</div>;
  }
};

export default Modal;
