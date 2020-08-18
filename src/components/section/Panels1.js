import React from "react";
import Modal from "./Modal";
import Desescalada from "../../imgs/desescalada-mu.jpg";
import Kawaii from "../../imgs/kawaii-mu.jpg";
import Digital from "../../imgs/digital-mu.jpg";

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
      slogan,
      description,
      reason,
      technologies,
      link,
      image,
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
            className="english__active"
            type="button"
            value={this.state.isModalOpen}
            onClick={this.onChangeModal}
          >
            + more
          </button>
          <button
            className="spanish"
            type="button"
            value={this.state.isModalOpen}
            onClick={this.onChangeModal}
          >
            + más
          </button>
        </div>
        <Modal
          isModalOpen={this.state.isModalOpen}
          onChangeModal={this.onChangeModal}
          title={title}
          slogan={slogan}
          description={description}
          reason={reason}
          technologies={technologies}
          link={link}
          image={image}
        />
      </div>
    );
  }
}

export default Panels1;
