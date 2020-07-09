import React from "react";

const NavBarHeader = () => {
  const onSetDisplay = (e) => {
    e.preventDefault();
  };

  return (
    <nav>
      <ul className="navBarHeader">
        <li id="homeButton" onClick={onSetDisplay}>
          Home
        </li>
        <li id="infoButton" onClick={onSetDisplay}>
          Info
        </li>
      </ul>
    </nav>
  );
};

export default NavBarHeader;
