import React from 'react'
import '../css/ContactImg.css'
export default function ContactImg() {
  return (
    <div className="Contact-img-container">
        <div className="contact-head">
            <h2>Get In Touch</h2>
        </div>
        <div className="colz" id='icon-contact'>
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/achyut-vardhan-3a4905180/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/achyutvardhan">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.instagram.com/achyutvardhan/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@mightyav7001">
                <i className="fa fa-youtube"></i>
              </a>
              <a href="https://twitter.com/VardhanAchyut">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        <h4 className='space-up'>Send Your Email Here!</h4>
        <div className="content-img">
            <img src={require('../../../assets/Home/mailz.jpeg')} alt="" width={500} />
        </div>
    </div>
  )
}
