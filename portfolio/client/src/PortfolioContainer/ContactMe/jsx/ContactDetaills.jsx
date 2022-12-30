import React from 'react'
import {useState} from 'react'
import '../css/Details.css'
export default function ContactDetaills() {
       const [formData, setData] = useState({
        contName : "",
        contEmail : "",
        contMessage : ""
       })
       
       const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        document.querySelector(".ConfirmMessage-container").style.display = "block";
        document.querySelector(".ConfirmMessage-container").style.opacity = "1";
        document.querySelector(".contact-container").style.opacity = "0.5";
        let contenChange = ()=>{
            document.querySelector(".animation-internal p").innerHTML = "Message Sent"
        }

        setTimeout(contenChange,5400);
        let blockdisplay = ()=>{
            document.querySelector(".ConfirmMessage-container").style.display = "none";
        document.querySelector(".contact-container").style.opacity = "1";
        }

        setTimeout(blockdisplay,7000);
       }
  return (
    <div className="contact-detail-container">
        <div className="contact-white-container">
          <form className="contact-message-container" onSubmit={handleSubmit}>
            <label className='column-container'>
                Name:
                <input type="text" onChange={(e)=>setData({...formData, contName : e.target.value})} value={formData.contName} className='input-box'/>
                Email:
                <input type="email" name="email" onChange={(e)=>setData({...formData, contEmail : e.target.value})} value={formData.contEmail} className='input-box' />
                Message
                <textarea type="text" name="" onChange={(e)=>setData({...formData, contMessage : e.target.value})} value={formData.contMessage} className='input-box' id='box-type'  />
            </label>
            <input type="submit" value="Send" className='submit-btn'/>
          </form>
        </div>
    </div>
  )
}
