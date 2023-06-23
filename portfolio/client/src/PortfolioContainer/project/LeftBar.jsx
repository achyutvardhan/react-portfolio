import React from 'react'
import './css/Lbar.css'
import out from '../../assets/Home/arrow.gif'

export default function LeftBar(props) {
  console.log(props.data)
  return (
    <>
    <div className="LexternalBarDiv">
        <div className="LinternalBarDiv">
            <div className="LprojectDetails">
                  <p className='Lprojet-name'>Payment-Integration </p>
                  <p className='Lduration'>Jun 2023 - Jun 2023 </p>
                  <p className='Ldiscription'>Implemented Razorpay's easy-to-use checkout integration
for a smooth payment experience. Supported various
payment methods including credit/debit cards, net banking,
and digital wallets.
</p>
                  <button className='Lproject-link'>
                    <a href="http://" target="_blank" rel="noopener noreferrer" >visit</a>
                    <img src={out} alt="" width={25}  />

                  </button>
            </div>
            <div>
              <iframe src={"https://solutionsdepot.in/"} frameborder="0"className='LwebLink' ></iframe>
            </div>
        </div>
      </div>
    </>
  )
}
