import React from "react";

const Modal = (props) => {
  const closeModal = (e) => {
    e.preventDefault();
    props.onChangeModal(e.currentTarget.value);
  };
  if (props.modal === true) {
    return (
      <div className="modalContainer active">
        <div className="modalInfo">
          <button
            type="button"
            className="closeModal"
            id="closeModal"
            value={props.modal}
            onClick={closeModal}
          >
            <i class="fas fa-times"></i>
          </button>
          <img className="modalImg" alt="description" />
          <div className="modalText">
            <h4>Title</h4>
            <p>Description</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="modal disabled">No</div>;
  }
};

export default Modal;
