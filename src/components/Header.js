import React from "react";
import NavBarHeader from "./header/NavBarHeader";
// import ThemeToggle from "./header/ThemeToggle";
import LangToggle from "./header/LangToggle";

class Header extends React.Component {
  state = { lang: "english" };

  render() {
    return (
      <header role="banner">
        <img alt="logo" />
        <NavBarHeader />
        {/* <ThemeToggle /> */}
        <LangToggle />
      </header>
    );
  }
}

export default Header;
