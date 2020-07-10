import React from "react";
import NavBarSection from "./section/NavBarSection";
import Projects from "./section/Projects";
import Modal1 from "./section/Modal1";

class Info extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isModalOpen: false,
    };
    this.onChangeModal = this.onChangeModal.bind(this);
  }

  onChangeModal() {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  }

  render() {
    const modal = this.state.isModalOpen;
    return (
      <main className="infoContainer">
        <Modal1 modal={modal} />
        <NavBarSection />
        <Projects onChangeModal={this.onChangeModal} modal={modal} />
      </main>
    );
  }
}

export default Info;
