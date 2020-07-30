import React from "react";
import Modal1 from "./Modal1";
import Desescalada from "../../imgs/Desescalada.png";
import Kawaii from "../../imgs/Kawaii.png";
import Digital from "../../imgs/Digital.png";

class Panels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    console.log(props);
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
        <img src={image} alt={title} />
        <div className="projectTitle">
          <h3>{this.props.title}</h3>
          <button
            type="button"
            value={this.state.isModalOpen}
            onClick={this.onChangeModal}
          >
            + more
          </button>
        </div>
        <Modal1
          isModalOpen={this.state.isModalOpen}
          onChangeModal={this.onChangeModal}
          title={title}
          slogan={slogan}
          description={description}
          reason={reason}
          technologies={technologies}
          link={link}
        />
      </div>
    );
  }
}

export default Panels;
