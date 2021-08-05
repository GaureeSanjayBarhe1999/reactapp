import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        News App made by -{" "}
        <a href="https://www.linkedin.com/in/gauree-barhe-48b6901a5" target="__blank">
         Gauree Barhe
        </a>
      </span>
      <hr style={{ width: "90%" }} />
     
    </div>
  );
};

export default Footer;