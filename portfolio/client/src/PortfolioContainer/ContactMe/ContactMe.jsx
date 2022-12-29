import React from 'react'
import ContactDetails from './jsx/ContactDetaills'
import ContactImg from './jsx/ContactImg'
import './ContactMe.css'
export default function ContactMe() {
  return (
    <>
    <section id='ContactMe'>
    <div className="header">
      <h2>Contact Me</h2>
      <h4>Let's Keep in Touch</h4>
     </div>
     <div className="contact-container">
       <ContactImg/>
       <ContactDetails/>
     </div>
    </section>
    </>
  )
}
