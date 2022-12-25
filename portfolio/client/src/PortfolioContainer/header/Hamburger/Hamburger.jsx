import React from 'react'
import'./Hamburger.css'
export default function Hamburger() {
  return (
    <div className="hamburger-container">
        <div className="slide-bar">
        <div className="ham-slide-bar"></div>
        <div className="ham-slide-bar"></div>
        <div className="ham-slide-bar"></div>
        </div>

        <div className="menu">
          <div className="route-ham">
             <a href="/" className="navbtn-ham">Home</a>
             <a href="#" className="navbtn-ham">AboutMe</a>
             <a href="#" className="navbtn-ham">Resume</a>
             <a href="#" className="navbtn-ham">ContactMe</a>
             <a href="#" className="navbtn-ham">Testimonial</a>
          </div>
        </div>
      </div>
  )
}
