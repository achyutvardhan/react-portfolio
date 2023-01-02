import React from 'react'
import ContentDiv from './jsx/ContentDiv'
import data from './data.json'
import './Resume.css'
export default function Resume() {
  let {rightHead} = data;
  return (
    <section id='resume'>
      <div className="resume-external-container">
        <div className="resume-internal-container">
            <p className='heading-resume'>Resume</p>
           {rightHead.map((Data,i)=>
           <ContentDiv data={Data} key ={i}/>
           )} 
        </div>
        </div>   
       </section>
  )
}
