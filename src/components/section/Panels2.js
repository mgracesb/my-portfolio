import React from "react";
import Modal1 from "./Modal1";

class Panels extends React.Component {
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
    } = this.props;
    return (
      <div className="panelContainer">
        <img src="#" alt="" />
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
