import React from "react";
import ContentLeft from "./ContentLeft";
import "../css/ContentDiv.css"
export default function ContentDiv(props) {
  return (
    <>
      <div className="resume-external">
        <div className="resume-internal">
          <div className="resume-right-internal">
            {/* <p>Work Experience</p> */}
            <p>{props.rightHead}</p>
          </div>
          <div className="left-column">
          <ContentLeft/>
          <ContentLeft/>
          </div>
        </div>
        <div className="line-space"></div>
      </div>
    </>
  );
}
