import React from 'react'
import '../css/ContentBox.css'
export default function ContentBox(props) {
    console.log(props);
  return (
    <>
    <div className="Testi-extrenal-container">
        <div className="Testi-internal-container">
            <div className="testi-para">
                <p>{props.Data.message}</p>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquam esse blanditiis, dolorum harum assumenda ipsum neque placeat ratione. Neque sunt saepe ratione rerum, tempore doloribus quae officia odio odit!</p> */}
            </div>
            <div className="testi-img">
                <img src={props.Data.img} alt="img" />
                {/* <img src={require('../../../assets/Home/achyut.jpg')} alt="img" /> */}
                <div className="testi-name">
                   <div className="position" >
                    {/* <p>Achyut vardhan</p> */}
                    <p>{props.Data.name}</p>
                    </div> 
                    <div className="position" id='light'>
                        {/* <p>Founder</p> */}
                        <p>{props.Data.position}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
