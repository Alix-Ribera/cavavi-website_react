import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Container">
      <div className="FooterContent">
        <a href="#" className="Facebook">
          Facebook
        </a>
        <a href="#" className="Linkedin">
          Linkedin
        </a>
        <a href="#" className="Instagram">
          Instagram
        </a>
        <div className="Author">
          Codi realitzat per{" "}
          <a href="https://github.com/Alix-Ribera">Alix Simo</a> 2021
        </div>
      </div>
    </div>
  );
}
