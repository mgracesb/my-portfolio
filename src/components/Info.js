import React from "react";
// import BreadCrumbs from "./section/BreadCrumbs";
import NavBarSection from "./section/NavBarSection";
import Projects from "./section/Projects";
import Experience from "./section/Experience";
import Modal1 from "./section/Modal1";
import AboutMe from "./section/AboutMe";
// import { Route, Switch } from "react-router-dom";

class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false,
      // nav: [["info"]],
    };
    // this.section = React.createRef();
  }

  onChangeModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  // addToNavBar = (displayName) => {
  //   this.setState({ nav: [...this.state.nav, [displayName]] });
  // };

  // goToSection = (ref) =>
  //   this.section.scrollIntoView({ behavior: "smooth", block: "start" });

  render() {
    const modal = this.state.isModalOpen;
    return (
      <main className="infoContainer">
        <Modal1 modal={modal} onChangeModal={this.onChangeModal} />
        {/* <BreadCrumbs nav={this.state.nav} addToNavBar={this.addToNavBar} /> */}
        <NavBarSection />

        {/* <Route
          path="/info/projects"
          // onClick={() => this.addToNavBar("projects")}
          component={() => (
            <Projects onChangeModal={this.onChangeModal} modal={modal} />
          )}
        /> */}
        <Projects
          onChangeModal={this.onChangeModal}
          modal={modal}
          id="projects"
          // section={this.section}
        />
        {/* <Route
          path="/info/experience"
          component={() => (
            <Experience
              ref={this.section}
              onChangeModal={this.onChangeModal}
              modal={modal}
              // addToNavBar={this.addToNavBar}
            />
          )}
        /> */}
        <Experience
          onChangeModal={this.onChangeModal}
          modal={modal}
          id="experience"
          // section={this.section}
          // addToNavBar={this.addToNavBar}
        />
        {/* <Route
          path="/info/aboutme"
          component={AboutMe}
          onClick={() => this.addToNavBar("projects")}
           component={() => (
             <AboutMeTxt onChangeModal={this.onChangeModal} modal={modal} 
           addToNavBar={this.addToNavBar}
         /> */}
        <AboutMe
          onChangeModal={this.onChangeModal}
          modal={modal}
          id="aboutme"
          // section={this.section}
        />
      </main>
    );
  }
}

export default Info;
