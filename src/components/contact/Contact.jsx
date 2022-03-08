import { useState } from "react";
import "./contact.scss"

export default function Contact() {
  const [message,setMessage]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="./assets/handshake.png"/>
      </div>

      <div className="right">
        <p>Lets Talk !</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder="Enter Message"></textarea>
          <div class="fancybutton">
            <button type="submit"><span>Send</span></button>
            {message && <span className="replytext">Reply on the way :)</span>}
          </div>
        </form>
      </div>

    </div>
  )
}
