import React from 'react';
import './Message.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Message() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0zc5szu', 'template_zh56u8f', form.current, 'a7iFcdKBvFY_FqR7w')

        e.target.reset();
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='contact-card'>
                            <h4 className='text-center mb-3'>Education</h4>
                            <p>I Recently completed my <b>Bachelor of Engineering B.E.</b> 
                            in <b>Computer Engineering</b> From <b>Savitribai Phule Pune University</b>. 
                            <br /> 
                            CGPA: 8.49  (Grade: <b>A</b>)  Nov 2021-May 2024

                        <div className='text-center mt-2'
                            style={{width: "100%"}}>
                            <a target='_blank' href="https://drive.google.com/file/d/1HnwubyLtea88fB0GG-bwxH1X2W5-sbNs/view?usp=drive_link"> 
                            <button type="button" class="btn-resume2"><p><i class="fa-sharp fa-solid fa-file-certificate"></i> Degree Certificate</p></button>
                            </a>
                        </div>

                            </p>

                           
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-4 mb-4'>
                        <div className='send-message-card'>
                            <form className='text-center' ref={form} onSubmit={sendEmail}>
                                <h4 className='text-center mt-1 mb-2'>Contact Me</h4>
                                <input className="login-form-input mb-2 p-2" placeholder='Your Full Name' type="text" name="name" required />
                                <input className="login-form-input mb-2 p-2" placeholder='Your Email' type="email" name="email" required />
                                <input className="login-form-input mb-2 p-2" placeholder='subject' type="text" name="subject" required />
                                <textarea className="text-area-input mb-2 p-2" placeholder='Your Message' rows="5" cols="20" name="message" required />
                                <button type="submit" className=' btn btn-primary btn-send-msg text-center mt-3'><b><i class="fa-solid fa-share"></i> Send Message</b></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message