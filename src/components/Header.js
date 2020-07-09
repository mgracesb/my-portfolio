import React from "react";
import NavBarHeader from "./header/NavBarHeader";
import LangToggle from "./header/LangToggle";

const Header = () => {
  return (
    <header>
      <img alt="logo" />
      <NavBarHeader />
      <LangToggle />
    </header>
  );
};

export default Header;
