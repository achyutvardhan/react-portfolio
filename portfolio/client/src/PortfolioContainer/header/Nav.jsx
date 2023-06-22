import React from "react";
import Hamburger from "./Hamburger/Hamburger";
import "./nav.css";
export default function Nav() {
  return (
    <header>
      <div className="name">ACHYUT</div>
      <div className="route">
        <a href="/" className="navbtn">Home</a>
        <a href="/#about-me" className="navbtn">AboutMe</a>
        <a href="/Resume" className="navbtn">Resume</a>
        <a href="/#testimonial" className="navbtn">Testimonial</a>
        <a href="/#ContactMe" className="navbtn">ContactMe</a>
        <a href="/Project" className="navbtn">Project</a>
      </div>
      <Hamburger/>
    </header>
  );
}
