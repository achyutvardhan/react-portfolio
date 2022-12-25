import React from "react";
import "./nav.css";
export default function Nav() {
  return (
    <header>
      <div className="name">ACHYUT</div>
      <div className="route">
        <a href="/" className="navbtn">Home</a>
        <a href="#" className="navbtn">AboutMe</a>
        <a href="#" className="navbtn">Resume</a>
        <a href="#" className="navbtn">Testimonial</a>
        <a href="#" className="navbtn">ContactMe</a>
      </div>
    </header>
  );
}
