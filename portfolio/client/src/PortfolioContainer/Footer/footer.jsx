import React from 'react'
import './footer.css'
export default function footer() {
  return (
    <footer>
        <div className='footerbottom'>
            <div className="footerleft">
              <p>© Copyrite 2022-2023.All rights are reserved. </p>
            </div>
            <div className="footerright">
            <div className="colz">
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
            </div>
        </div>
    </footer>
  )
}
