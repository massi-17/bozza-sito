import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope
  } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4xp9fgq', 'template_gyx8d49', form.current, '7HE3PA3BiZFeVq9rM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="content-tabs" className='contact'>
            
            <h1>
                &#x2039;
                <span className="title">Contact</span> &#47;&#x203A;
            </h1>
            <div className="contact-wrapper">
<form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" placeholder="name_" />
                <label>Email</label>
                <input type="email" name="user_email" placeholder="e-mail_" />
                <label>Message</label>
                <textarea name="message" placeholder="message_" />
                <input type="submit" value="Send" className='sendBtn' />
            </form>
            <div className="social">
                <a href="mailto:massimianisilvia@gmail.com" target="blank_">
                    <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    className="icon-contact"
                /></a>
                <a href="https://github.com/massi-17" target="blank_">
                <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    className="icon-contact"
                /></a>
                <a href="https://www.linkedin.com/in/silviamassimiani/" target="blank_">
                <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className="icon-contact"
                /></a>
                <a href="https://Massi17#5689" target="blank_">
                <FontAwesomeIcon
                    icon={faDiscord}
                    size="2x"
                    className="icon-contact"
                /></a>
            </div>

            </div>
            
        </div>
    )
}
export default Contact