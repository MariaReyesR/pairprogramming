import React from "react";
import "./Header.scss";
import logo from "../../assets/logomusic.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        {" "}
        <img src={logo} alt="Company Logo" width="150" />
      </div>
      <div className="header__title">Find a song!</div>
    </header>
  );
};

export default Header;
