import React from "react";
import Modal from "./Modal";
import Desescalada from "../../imgs/desescalada-mu.png";
import Kawaii from "../../imgs/kawaii-mu.png";
import Digital from "../../imgs/digital-mu.png";

class Panels1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  onChangeModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const {
      title,
      descriptionEN,
      descriptionES,
      infoEN,
      infoES,
      reasonEN,
      reasonES,
      link,
      image,
      lang,
    } = this.props;

    return (
      <div className="panelContainer">
        <div className="imgContainer">
          <img
            className="panelImg"
            src={
              image === "Desescalada"
                ? Desescalada
                : image === "Kawaii"
                ? Kawaii
                : Digital
            }
            alt={title}
          />
        </div>
        <div className="projectTitle">
          <h3>{title}</h3>
          <button
            className={lang === false ? "active" : "inactive"}
            type="button"
            value={this.state.isModalOpen}
            onClick={this.onChangeModal}
          >
            ++ learn more ++
          </button>
          <button
            className={lang !== false ? "active" : "inactive"}
            type="button"
            value={this.state.isModalOpen}
            onClick={this.onChangeModal}
          >
            ++ saber más ++
          </button>
        </div>
        <Modal
          isModalOpen={this.state.isModalOpen}
          onChangeModal={this.onChangeModal}
          title={title}
          description={lang === false ? descriptionEN : descriptionES}
          description2={lang === false ? infoEN : infoES}
          reason={lang === false ? reasonEN : reasonES}
          link={link}
          image={image}
          lang={lang}
        />
      </div>
    );
  }
}

export default Panels1;
