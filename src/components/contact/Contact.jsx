import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a440csf', 'template_tu2kanm', form.current, 'Hry8mxqJT-e6eOB5O');

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>lucasfuziyama@gmail.com</h5>
            <a href='mailto:lucasfuziyama@gmail.com' target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>lucasfuziyama@gmail.com</h5>
            <a href='https://m.me/japa126' target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+55 (31) 99322-2448</h5>
            <a href='https://api.whatsapp.com/send?phone=5531993222448' target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your FullName' required></input>
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact