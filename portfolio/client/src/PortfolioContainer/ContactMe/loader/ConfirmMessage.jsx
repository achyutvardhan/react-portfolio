import React from 'react'
import './ConfirmMessage.css'
export default function ConfirmMessage(props) {
  return (
    <>
    <div className="ConfirmMessage-container">
        <div className="animation-external">
            <div className="animation-internal">
                <p>Message Sending..</p>
            </div>
        </div>
    </div>
    </>
  )
}
