import React from "react";
import Hamburger from "./Hamburger/Hamburger";
import "./nav.css";
export default function Nav() {
  return (
    <header>
      <div className="name">ACHYUT</div>
      <div className="route">
        <a href="/" className="navbtn">Home</a>
        <a href="#about-me" className="navbtn">AboutMe</a>
        <a href="/Resume" className="navbtn">Resume</a>
        <a href="#" className="navbtn">Testimonial</a>
        <a href="#" className="navbtn">ContactMe</a>
      </div>
      <Hamburger/>
    </header>
  );
}
