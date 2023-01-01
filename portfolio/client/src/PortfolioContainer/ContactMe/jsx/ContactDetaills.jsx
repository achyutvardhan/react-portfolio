import React from 'react'
import {useState} from 'react'
import '../css/Details.css'
export default function ContactDetaills() {
       const [formData, setData] = useState({
        contName : "",
        contEmail : "",
        contMessage : ""
       })
       
       const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(formData);
        const url = "https://sheetdb.io/api/v1/th7snt8dqibpp";
        const result = await fetch(url,{
          method : "POST",
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(formData)
        }).then(
          response => {response.json()
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
          )
        .catch(err=>{console.log(err)
          document.querySelector(".ConfirmMessage-container").style.display = "block";
          document.querySelector(".ConfirmMessage-container").style.opacity = "1";
          document.querySelector(".contact-container").style.opacity = "0.5";
          let contenChange = ()=>{
            document.querySelector(".animation-internal p").style.color = "#FF0000"
            document.querySelector(".animation-internal p").innerHTML = "Message not sent"
          }
  
          setTimeout(contenChange,5400);
          let blockdisplay = ()=>{
              document.querySelector(".ConfirmMessage-container").style.display = "none";
          document.querySelector(".contact-container").style.opacity = "1";
          }
  
          setTimeout(blockdisplay,7000);
        })
       }
  return (
    <div className="contact-detail-container">
        <div className="contact-white-container">
          <form className="contact-message-container" onSubmit={handleSubmit}>
            <label className='column-container'>
                Name:
                <input type="text" onChange={(e)=>setData({...formData, contName : e.target.value})} value={formData.contName} name="data[name]" className='input-box'/>
                Email:
                <input type="email" name="data[email]" onChange={(e)=>setData({...formData, contEmail : e.target.value})} value={formData.contEmail} className='input-box' />
                Message
                <textarea type="text" name="data[message]" onChange={(e)=>setData({...formData, contMessage : e.target.value})} value={formData.contMessage} className='input-box' id='box-type'  />
            </label>
            <input type="submit" value="Send" className='submit-btn'/>
          </form>
        </div>
    </div>
  )
}
