import React from 'react'
import AboutDetails from './details/AboutDetails'
import AboutMeImg from './details/AboutMeImg'
import './AboutMe.css'
import './css/AboutImg.css'
import './css/details.css'
export default function AboutMe() {
  return (
    <>
    <div className="about-container">
      <AboutMeImg/>
      <AboutDetails/>
    </div>
    </>
  )
}
