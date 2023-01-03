import React from 'react'
import Hmfooter from "../Home/footer/footer.jsx"
import Carousel from './jsx/Carousel.jsx'
// import ContentBox from './jsx/ContentBox.jsx'
import './Testimonial.css'
export default function Testimonial() {
  return (
    <>
    <section id='testimonial'>
    <div className="header">
      <h2>Testimonial</h2>
      <h4>What My Client Say About Me?</h4>
      <div className="decorative-line-3"></div>
     </div>

     <div className="testi-container">
        <Carousel/>
        {/* <ContentBox/> */}
     <Hmfooter />
     </div>
    </section>
    </>
  )
}
