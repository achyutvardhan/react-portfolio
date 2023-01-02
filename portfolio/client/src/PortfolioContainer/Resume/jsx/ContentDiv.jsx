import React from "react";
import ContentLeft from "./ContentLeft";
import "../css/ContentDiv.css"
export default function ContentDiv(props) {
  let {content} = props.data
  console.log(content);
  return (
    <>
      <div className="resume-external">
        <div className="resume-internal">
          <div className="resume-right-internal">
            {/* <p>Work Experience</p> */}
            <p>{props.data.heading}</p>
          </div>
          <div className="left-column">
          {content.map((Data,i)=>
          <ContentLeft data = {Data} key={i}/>)}
          </div>
        </div>
        <div className="line-space"></div>
      </div>
    </>
  );
}
