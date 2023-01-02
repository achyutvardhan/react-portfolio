import React from 'react'

export default function ContentLeft(props) {
  return (
    <>
    <div className="resume-left-internal">
            {/* <div className="year-resume">2035 - Present</div> */}
            <div className="year-resume">{props.data.year}</div>
            <div className="left-left-resume">
              {/* <div className="left-left-heading">Editor</div> */}
              <div className="left-left-heading">{props.data.leftHead}</div>
              <div className="left-left-para">
                <p>{props.data.para}</p>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad voluptas beatae optio. Culpa sint veniam eaque! Dolor ab officia fuga doloremque ipsa in, aut, laboriosam sint odio eos nam.</p> */}
              </div>
            </div>
          </div>
    </>
  )
}
