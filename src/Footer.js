import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      {/* <div className="footer__glow">Glow it here</div> */}
      <div className="footer">
        <div className="footer__left">
          <p>Album and song details</p>
        </div>
        <div className="footer__center">
          <p>Player controls</p>
        </div>
        <div className="footer__right">
          <p>Volume controls</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
