import React from "react";
import BreadCrumbs from "./section/BreadCrumbs";
import NavBarSection from "./section/NavBarSection";
import Projects from "./section/Projects";
import Experience from "./section/Experience";
import Modal1 from "./section/Modal1";
import AboutMe from "./section/AboutMe";
import { Route, Switch } from "react-router-dom";

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
        <Modal1 modal={modal} onChangeModal={this.onChangeModal} />
        <BreadCrumbs />
        <NavBarSection />
        <Switch>
          <Route
            path="/info/projects"
            component={Projects}
            onChangeModal={this.onChangeModal}
            modal={modal}
          />
          <Route
            path="/info/experience"
            component={Experience}
            onChangeModal={this.onChangeModal}
            modal={modal}
          />
          <Route path="/info/aboutme" component={AboutMe} />
        </Switch>
      </main>
    );
  }
}

export default Info;
