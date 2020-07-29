import React from "react";
// import BreadCrumbs from "./section/BreadCrumbs";
import NavBarSection from "./section/NavBarSection";
import Projects from "./section/Projects";
import Experience from "./section/Experience";
import Modal1 from "./section/Modal1";
import AboutMe from "./section/AboutMe";

class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false,
      // nav: [["info"]],
    };
  }

  onChangeModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const modal = this.state.isModalOpen;
    return (
      <main className="infoContainer">
        <Modal1 modal={modal} onChangeModal={this.onChangeModal} />

        <NavBarSection />

        <Projects
          onChangeModal={this.onChangeModal}
          modal={modal}
          id="projects"
        />

        <Experience
          onChangeModal={this.onChangeModal}
          modal={modal}
          id="experience"
        />

        <AboutMe
          onChangeModal={this.onChangeModal}
          modal={modal}
          id="aboutme"
        />
      </main>
    );
  }
}

export default Info;
