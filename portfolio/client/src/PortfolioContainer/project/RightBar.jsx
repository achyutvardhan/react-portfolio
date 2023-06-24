import React from 'react'
import './css/bar.css'
import out from '../../assets/Home/arrow.gif'
export default function RightBar(props) {
  // console.log("hello")
  console.log(props.data)
  const {name , duration,link,description} = props.data
  const navtopage = ()=>{
    window.location.href = link;
  }
  return (
    <>
      <div className="externalBarDiv">
        <div className="internalBarDiv">
            <div className="projectDetails">
                  <p className='projet-name'>{name}</p>
                  <p className='duration'>{duration} </p>
                  <p className='discription'>{description} </p>
                  <button className='Lproject-link' onClick={navtopage} >
                  <p>visit</p>
                    <img src={out} alt="" width={25}  />

                  </button>
            </div>
            <div>
              <iframe src={"https://solutionsdepot.in/"} frameborder="0"className='webLink' ></iframe>
            </div>
        </div>
      </div>
    </>
  )
}
