import React from 'react'
import ContentDiv from './jsx/ContentDiv'
import './Resume.css'
export default function Resume() {
  return (
    <section id='resume'>
      <div className="resume-external-container">
        <div className="resume-internal-container">
            <p className='heading-resume'>Resume</p>
            <ContentDiv/>
        </div>
        </div>   
       </section>
  )
}
