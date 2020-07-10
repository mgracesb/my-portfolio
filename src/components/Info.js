import React from "react";
import NavBarSection from "./section/NavBarSection";
import Projects from "./section/Projects";
import Modal1 from "./section/Modal1";

class Info extends React.Component {
  state = { isModalOpen: false };

  render() {
    const modal = this.state.isModalOpen;
    return (
      <main className="infoContainer">
        <Modal1 modal={modal} />
        <NavBarSection />
        <Projects modal={modal} />
      </main>
    );
  }
}

export default Info;
