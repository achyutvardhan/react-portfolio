import React from 'react'

export default function AboutDetails() {
  return (
    <>
    <div className="detail-container">
      <div className="detail-para">
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam obcaecati, asperiores corporis repellat praesentium reiciendis recusandae rem minus, quibusdam nam perferendis. Sapiente earum illo ratione praesentium. Ut excepturi optio vitae!</p>
      </div>
      <div className="highlights">
        <h5>Here Are Few Highlights</h5>
        <ul>
          <li className="points">Enthusiatic Dev</li>
          <li className="points">Full Stack Developer</li>
          <li className="points">C/C++ Programer</li>
          <li className="points">React/React Native Dev</li>
          <li className="points">Mern Stack Dev</li>
        </ul>
      </div>
      <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="#" download={"achyut_vardhan.pdf"}>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
    </div>
    </>
  )
}
