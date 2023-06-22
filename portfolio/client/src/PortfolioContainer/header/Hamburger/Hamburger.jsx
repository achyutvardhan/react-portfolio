import React, { useState } from 'react'
import'./Hamburger.css'
export default function Hamburger() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [icon,setIcon] = useState(false)
  const handleToggle = ()=>{
    console.log("called")
    setNavbarOpen(!navbarOpen);
    setIcon(!icon)
  }
  const closeNav = ()=>{
    setNavbarOpen(false)
    setIcon(false)
    if (icon) {
      document.querySelector(".bar").style.display = "block"
      document.querySelector(".cross").style.display = "none"
      document.body.style.overflow = "scroll"
    }
    else{
      document.querySelector(".bar").style.display = "none"
      document.querySelector(".cross").style.display = "block"
      document.body.style.overflow = "hidden"

    }
  }
  const changeIcon = ()=>{ 
    if (icon) {
      document.querySelector(".bar").style.display = "block"
      document.querySelector(".cross").style.display = "none"
      document.body.style.overflow = "scroll"
    }
    else{
      document.querySelector(".bar").style.display = "none"
      document.querySelector(".cross").style.display = "block"
      document.body.style.overflow = "hidden"

    }
  }
  return (
    <div className="hamburger-container" onClick={handleToggle} >
        <div className="slide-bar" onClick={changeIcon} >
          <div className="bar">
        <div className="ham-slide-bar"></div>
        <div className="ham-slide-bar"></div>
        <div className="ham-slide-bar"></div>
          </div>
          <div className="cross">
            <div className="cross-bar">X</div>
          </div>
        </div>

        <div className={` ${navbarOpen ?"menu" : "hideMenu"}`}>
          <div className="route-ham">
             <a href="/" className="navbtn-ham" onClick={closeNav}>Home</a>
             <a href="/#about-me" className="navbtn-ham" onClick={closeNav}>AboutMe</a>
             <a href="/Resume" className="navbtn-ham" onClick={closeNav}>Resume</a>
             <a href="/#testimonial" className="navbtn-ham" onClick={closeNav}>Testimonial</a>
             <a href="/#ContactMe" className="navbtn-ham" onClick={closeNav}>ContactMe</a>
             <a href="/Project" className="navbtn-ham" onClick={closeNav}>Project</a>
          </div>
        </div>
      </div>
  )
}
