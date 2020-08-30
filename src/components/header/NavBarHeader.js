import React from "react";
import { Link } from "react-router-dom";

class NavBarHeader extends React.Component {
  state = { id: "" };

  selected = (e) => {
    e.preventDefault();
    const val = e.currentTarget.id;
    this.setState({ id: val });
  };

  render() {
    const { id } = this.state;
    return (
      <nav>
        <ul className="navBarHeader">
          <li id="homeButton" onClick={this.selected}>
            <Link
              className={id === "homeButton" ? "link__selected" : "link"}
              to="/"
            >
              Home
            </Link>
          </li>
          <li id="infoButton" onClick={this.selected}>
            <Link
              className={id === "infoButton" ? "link__selected" : "link"}
              to="/info"
            >
              Info
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBarHeader;
