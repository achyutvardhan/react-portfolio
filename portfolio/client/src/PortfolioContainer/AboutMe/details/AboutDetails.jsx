import React from 'react'

export default function AboutDetails() {
  const scrollToContactMe = ()=>{
    document.getElementById("ContactMe").scrollIntoView();
  }
  return (
    <>
    <div className="detail-container">
      <div className="detail-para">
         <p>Web developer with a focus on discovering solutions, skilled at contributing to highly collaborative work environments. a track record of success creating user-centered websites with HTML, CSS, JavaScript, Node JS, Express JS, and MYSQL. good understanding of user experience, speed, and web design best practises.</p>
      </div>
      <div className="highlights">
        <h5>Here Are Few Highlights</h5>
        <ul>
          <li className="points">Enthusiatic Dev</li>
          <li className="points">Full Stack Developer</li>
          <li className="points">C/C++ Programmer</li>
          <li className="points">React/React Native Dev</li>
          <li className="points">Mern Stack Dev</li>
        </ul>
      </div>
      <div className="profile-options">
            <button className="btn primary-btn" onClick={scrollToContactMe}>
              {""}
              Hire Me{" "}
            </button>
            <a href={require('../../../assets/Home/image1.pdf')} download={"achyut_vardhan.pdf"}>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
    </div>
    </>
  )
}
