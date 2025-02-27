import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div to="/" className="footer__logo"></div>
      <copy className="footer__copy">
        {" "}
        ©2024 MoodTune. Terms Privacy Cookies
      </copy>
    </section>
  );
};

export default Footer;
