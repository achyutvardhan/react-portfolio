import React from 'react'
import './css/bar.css'
import out from '../../assets/Home/arrow.gif'
export default function RightBar(props) {
  console.log("hello")
  console.log(props.data)
  return (
    <>
      <div className="externalBarDiv">
        <div className="internalBarDiv">
            <div className="projectDetails">
                  <p className='projet-name'>Payment-Integration </p>
                  <p className='duration'>Jun 2023 - Jun 2023 </p>
                  <p className='discription'>Implemented Razorpay's easy-to-use checkout integration
for a smooth payment experience. Supported various
payment methods including credit/debit cards, net banking,
and digital wallets.
</p>
                  <button className='project-link'>
                    <a href="http://" target="_blank" rel="noopener noreferrer" >visit</a>
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
