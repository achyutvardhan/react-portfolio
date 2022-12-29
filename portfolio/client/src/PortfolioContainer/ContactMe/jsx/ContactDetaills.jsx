import React from 'react'
import '../css/Details.css'
export default function ContactDetaills() {
  return (
    <div className="contact-detail-container">
        <div className="contact-white-container">
          <form className="contact-message-container">
            <label className='column-container'>
                Name:
                <input type="text" className='input-box'/>
                Email:
                <input type="email" name="email" className='input-box' />
                Message
                <input type="text" name="" className='input-box' id='box-type'  />
            </label>
            <input type="submit" value="Send" className='submit-btn'/>
          </form>
        </div>
    </div>
  )
}
