import React from "react";
import NavBarHeader from "./header/NavBarHeader";
// import ThemeToggle from "./header/ThemeToggle";
import LangToggle from "./header/LangToggle";
import Logo from "../imgs/logo.png";

const Header = (props) => {
  const { lang, langToggle } = props;
  return (
    <header role="banner">
      <img alt="logo" src={Logo} className="logo" />
      <NavBarHeader />
      {/* <ThemeToggle /> */}
      <LangToggle lang={lang} langToggle={langToggle} />
    </header>
  );
};

export default Header;
