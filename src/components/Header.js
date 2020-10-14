import React from "react";
const Header = () => {
  return (
    <header className="header-wrapper">
      <img
        src="./images/bg-header-desktop.svg"
        className="header-desktop"
        alt=""
      />
      <img
        src="./images/bg-header-mobile.svg"
        className="header-mobile"
        alt=""
      />
    </header>
  );
};

export default Header;
