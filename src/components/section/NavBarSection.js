import React from "react";
import SectionInputs from "./SectionInputs";
import ScrollTo from "react-scroll-into-view";

class NavBarSection extends React.Component {
  state = { isSelected: "one" };

  selectItem = (e) => {
    e.preventDefault();
    const val = e.currentTarget.id;
    this.setState({ isSelected: val });
  };

  render() {
    const selected = this.state.isSelected;
    const lang = this.props.lang;
    return (
      <nav className="navBarSection">
        <ul>
          <li
            key="projects"
            id="one"
            className={selected === "one" ? "li selected" : "li"}
            onClick={this.selectItem}
          >
            <ScrollTo className="scrollTo" selector="#projects">
              <SectionInputs
                value="projects"
                id="proyectos"
                selected={selected}
                lang={lang}
              />
            </ScrollTo>
          </li>
          <li
            key="experience"
            id="two"
            className={selected === "two" ? "li selected" : "li"}
            onClick={this.selectItem}
          >
            <ScrollTo className="scrollTo" selector="#experience">
              <SectionInputs
                value="experience"
                id="experiencia"
                selected={selected}
                lang={lang}
              />
            </ScrollTo>
          </li>
          <li
            key="aboutme"
            id="three"
            className={selected === "three" ? "li selected" : "li"}
            onClick={this.selectItem}
          >
            <ScrollTo className="scrollTo" selector="#aboutme">
              <SectionInputs
                value="about me"
                id="sobre mi"
                selected={selected}
                lang={lang}
              />
            </ScrollTo>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBarSection;
