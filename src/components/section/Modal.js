import React from "react";
import DesescaladaVid from "../../imgs/desescalada-vid.mp4";
import KawaiiVid from "../../imgs/kawaii-vid.mp4";
import DigitalVid from "../../imgs/digital-vid.mp4";

const Modal = (props) => {
  const { image, title, description, link, reason, lang } = props;
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
            <div className="hoverAlert">
              <span>▸ play</span>
            </div>
            <video
              onMouseOver={(event) => event.target.play()}
              onMouseOut={(event) => event.target.pause()}
              src={
                image === "Desescalada"
                  ? DesescaladaVid
                  : image === "Kawaii"
                  ? KawaiiVid
                  : DigitalVid
              }
            ></video>

            <div className="modalContent">
              <h4>{title}</h4>
              <div className="modalText">
                <p>{description}</p>
                <p className={lang === false ? "q-active" : "inactive"}>
                  Why was it created?
                </p>
                <p className={lang !== false ? "q-active" : "inactive"}>
                  ¿Por qué se creó?
                </p>
                <p>{reason}</p>
                <div className="modalTechs">
                  <i class="fab fa-html5"></i>
                  <i class="fab fa-css3-alt"></i>
                  <i class="fab fa-js-square"></i>
                  <i class="fab fa-react"></i>
                  <i class="fab fa-sass"></i>
                  <i class="fab fa-apple"></i>
                </div>
                <div className="modalLink" href={link}>
                  <span>link</span>
                </div>
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
