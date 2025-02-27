import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">LOGO</div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <button className="header__nav-mood">Chill</button>
          <button className="header__nav-mood">Inspired</button>
          <button className="header__nav-mood">Hype</button>
          <button className="header__nav-mood">Blue</button>
          <button className="header__nav-mood">Focused</button>
          <button className="header__nav-mood">Love</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
