import React from "react";
import ContactDetails from "./jsx/ContactDetaills";
import ContactImg from "./jsx/ContactImg";
import ConfirmMessage from "./loader/ConfirmMessage";
import "./ContactMe.css";
export default function ContactMe() {
  return (
    <>
      <section id="ContactMe">
        <div className="header">
          <h2>Contact Me</h2>
          <h4>Let's Keep in Touch</h4>
          <div className="decorative-line-2"></div>
        </div>
        <ConfirmMessage />
        <div className="contact-container">
          <ContactImg />
          <ContactDetails />
        </div>
      </section>
    </>
  );
}
