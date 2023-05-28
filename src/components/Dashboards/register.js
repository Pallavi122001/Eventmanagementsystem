import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './register.css';
const Register=()=>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tdg0nri', 'template_popzlql', form.current, 'DMGVl3XVXAfs9fIaQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
    return(
        <body>
        <div className="register">
        <h1>Register For An Events</h1>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name"  placeholder="Your Name" ></input><br></br>
        <input type="text"  name="email"  placeholder="Your Email " ></input><br></br>
        <input type="text" name="event"  placeholder="Enter Your Interested Event" ></input><br></br>
        <input type="text"  name="branch"  placeholder="Your Branch " ></input><br></br>
        <a onClick={() => alert(' Registered Sucessfully ')}><input type="submit" value="Registered" className="registerbutton" /></a>
        </form>
        </div>
        </body>
    )
}

export default Register
