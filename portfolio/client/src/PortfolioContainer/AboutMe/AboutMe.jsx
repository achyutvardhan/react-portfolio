import React from 'react'
import AboutDetails from './details/AboutDetails'
import AboutMeImg from './details/AboutMeImg'
import './AboutMe.css'
import './css/AboutImg.css'
import './css/details.css'
export default function AboutMe() {
  return (
    <>
    <section className="external-contain" id='about-me'>
     <div className="header">
      <h2>About Me</h2>
      <h4>Why Choose Me?</h4>
      <div className="decorative-line"></div>
     </div>
    <div className="about-container">
      <AboutMeImg/>
      <AboutDetails/>
    </div>
    </section>
    </>
  )
}
