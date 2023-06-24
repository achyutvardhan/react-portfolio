import React from 'react'
import './css/Lbar.css'
import out from '../../assets/Home/arrow.gif'

export default function LeftBar(props) {

  console.log(props.data)
  const {name , duration,link,description,imgLink} = props.data
  console.log(props.data)
  const navtopage = ()=>{
    window.location.href = link;
  }
  return (
    <>
    <div className="LexternalBarDiv">
        <div className="LinternalBarDiv">
            <div className="LprojectDetails">
                  <p className='Lprojet-name'>{name} </p>
                  <p className='Lduration'>{duration} </p>
                  <p className='Ldiscription'>{description}</p>
                  <button className='Lproject-link' onClick={navtopage} >
                  <p>visit</p>
                    <img src={out} alt="" width={25}  />

                  </button>
            </div>
            <div className='LwebLink'>
              <img src={imgLink?imgLink:link} alt="" srcset=""  />
            </div>
        </div>
      </div>
    </>
  )
}
