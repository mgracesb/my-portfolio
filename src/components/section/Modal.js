import React from "react";
import Desescalada from "../../imgs/Desescalada.png";
import Kawaii from "../../imgs/Kawaii.png";
import Digital from "../../imgs/Digital.png";
import DesescaladaVid from "../../imgs/desescalada-vid.mp4";

const Modal = (props) => {
  const closeModal = (e) => {
    props.onChangeModal(e.currentTarget.value);
  };
  if (props.isModalOpen === true) {
    return (
      <div className="modalContainer active">
        <div className="modalBorder">
          <div className="modalBox">
            <button
              type="button"
              className="closeModal"
              id="closeModal"
              value={props.isModalOpen}
              onClick={closeModal}
            >
              <i className="fas fa-times"></i>
            </button>
            {/* <img
              className="modalImg"
              alt="description"
              src={
                props.image === "Desescalada"
                  ? Desescalada
                  : props.image === "Kawaii"
                  ? Kawaii
                  : Digital
              }
            /> */}
            <video
              onMouseOver={(event) => event.target.play()}
              onMouseOut={(event) => event.target.pause()}
              src={DesescaladaVid}
            ></video>
            <div className="modalContent">
              <h4>{props.title}</h4>
              <div className="modalText">
                <p>{props.slogan}</p>
                <p>{props.description}</p>
                <p>Why was it created?</p>
                <p>{props.reason}</p>
                <p>{props.technologies}</p>
                <p>{props.link}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="modalContainer disabled"></div>;
  }
};

export default Modal;
