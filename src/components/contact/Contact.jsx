import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import "./contact.scss"
import { useState } from "react";
import{ init } from '@emailjs/browser';
init("53KBQUoBO1fZr0hpE");



export default function Contact() {
  const [message,setMessage]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    setMessage(true)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q4t2oln', 'template_xs2zbb6', e.target, '53KBQUoBO1fZr0hpE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });

    e.target.reset()

  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="./assets/handshake.png"/>
      </div>

      <div className="right">
        <p>Lets Talk !</p>
        <form  onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name"></input>
          <input type="email" placeholder="Email" name="email"></input>
          <textarea placeholder="Enter Message" name="message"></textarea>
          <div class="fancybutton">
            <button type="submit"><span>Send</span></button>
            {message && <span className="replytext">Reply on the way :)</span>}
          </div>
        </form>
      </div>

    </div>
  )
}
