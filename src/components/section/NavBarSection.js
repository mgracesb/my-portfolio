import React from "react";
import SectionInputs from "./SectionInputs";
import ScrollTo from "react-scroll-into-view";

class NavBarSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
    };
  }

  selectItem = () => {
    console.log(this.state.isSelected);
    this.setState({ isSelected: !this.state.isSelected });
  };
  render() {
    const selected = this.state.isSelected;
    return (
      <nav className="navBarSection">
        <ul>
          <li key="projects" onClick={this.selectItem}>
            <ScrollTo className={"scrollTo"} selector="#projects">
              <SectionInputs value="projects" selected={selected} />
            </ScrollTo>
          </li>
          <li key="experience" onClick={this.selectItem}>
            <ScrollTo className="scrollTo" selector="#experience">
              <SectionInputs value="experience" selected={selected} />
            </ScrollTo>
          </li>
          <li key="aboutme" onClick={this.selectItem}>
            <ScrollTo className="scrollTo" selector="#aboutme">
              <SectionInputs value="aboutme" selected={selected} />
            </ScrollTo>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBarSection;
