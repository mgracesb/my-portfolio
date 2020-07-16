import React from "react";

const Modal = (props) => {
  const closeModal = (e) => {
    e.preventDefault();
    props.onChangeModal(e.currentTarget.value);
  };
  if (props.modal === true) {
    return (
      <div className="modalContainer active">
        <div className="modal">
          HI I'm a Modal
          <button
            type="button"
            className="closeModal"
            id="closeModal"
            value={props.modal}
            onClick={closeModal}
          >
            x
          </button>
        </div>
      </div>
    );
  } else {
    return <div className="modal disabled">No</div>;
  }
};

export default Modal;
