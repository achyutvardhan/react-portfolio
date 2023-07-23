import React from "react";
import Typical from "react-typical";
import Hmfooter from "./footer/footer";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Testimonial from "../Testimonial/Testimonial";
import "./Profile.css";
import "./Home.css";
export default function Profile() {

  const scrollContactMe = ()=>{
    document.getElementById("ContactMe").scrollIntoView();
  }
  return (
    <>
      <div className="home-container">
        <div className="profile-container">
          <div className="profile-parent">
            <div className="profile-details">
              <div className="colz">
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

              <div className="profile-details-name">
                <span className="primary-text">
                  {" "}
                  Hello, I'M{" "}
                  <span className="highlight-text">Achyut Vardhan</span>
                </span>
              </div>
              <div className="profile-details-role">
                <span className="primary-text">
                  {" "}
                  <h1>
                    {" "}
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Enthusiatic Dev ",
                        1000,
                        "Full Stack Developer",
                        1000,
                        "C/C++ Programmer",
                        1000,
                        "React Developer",
                        1000,
                        "Mern Stack Dev",
                        1000,
                      ]}
                    />
                  </h1>
                  <span className="profile-role-tagline">
                    Knack of building application with front and back end
                    operation.
                  </span>
                </span>
              </div>
              <div className="profile-options">
                <button className="btn primary-btn" onClick={scrollContactMe}>
                  {""}
                  Hire Me{" "}
                </button>
                <a href={require('../../assets/Home/image1.pdf')} download={"achyut_vardhan.pdf"}>
                  <button className="btn highlighted-btn">Get Resume</button>
                </a>
              </div>
            </div>
            <div className="profile-picture">
              <div className="profile-picture-background"></div>
            </div>
          </div>
        </div>
        <Hmfooter />
      </div>
      <AboutMe />
      <Testimonial/>
      <ContactMe />
    </>
  );
}
