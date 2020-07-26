import React from "react";
import NavBarHeader from "./header/NavBarHeader";
import LangToggle from "./header/LangToggle";

const Header = () => {
  return (
    <header role="banner">
      <img alt="logo" />
      <NavBarHeader />
      <LangToggle />
    </header>
  );
};

export default Header;
