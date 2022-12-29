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
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube"></i>
              </a>
              <a href="#">
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
