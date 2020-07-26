import React from "react";
import BreadCrumbs from "./section/BreadCrumbs";
import NavBarSection from "./section/NavBarSection";
import Projects from "./section/Projects";
import Experience from "./section/Experience";
import Modal1 from "./section/Modal1";
import AboutMe from "./section/AboutMe";
import { Route, Switch } from "react-router-dom";

class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      nav: [["info"]],
    };
    this.onChangeModal = this.onChangeModal.bind(this);
    this.addToNavBar = this.addToNavBar.bind(this);
  }

  onChangeModal() {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  }

  addToNavBar = (displayName) => {
    this.setState({ nav: [...this.state.nav, [displayName]] });
  };

  render() {
    const modal = this.state.isModalOpen;
    return (
      <main className="infoContainer">
        <Modal1 modal={modal} onChangeModal={this.onChangeModal} />
        <BreadCrumbs
          nav={this.state.nav}
          rollBackNavBar={this.rollBackNavBar}
          addToNavBar={this.addToNavBar}
        />
        <NavBarSection />

        <Route
          path="/info/projects"
          onClick={() => this.addToNavBar("projects")}
          component={() => (
            <Projects onChangeModal={this.onChangeModal} modal={modal} />
          )}
        />
        <Route
          path="/info/experience"
          component={() => (
            <Experience
              onChangeModal={this.onChangeModal}
              modal={modal}
              addToNavBar={this.addToNavBar}
            />
          )}
        />
        <Route
          path="/info/aboutme"
          component={AboutMe}
          addToNavBar={this.addToNavBar}
        />
      </main>
    );
  }
}

export default Info;
