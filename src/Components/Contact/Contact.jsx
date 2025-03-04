import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import facebook from '../../assets/communication.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "57789aca-ce93-4d03-9bad-a18c71574f3d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
        }
    };



    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Get in touch to bring your ideas to life—let's create something amazing together!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>sathish30527@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+9043268636</p>
                        </div>

                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Kavaraipettai</p>
                        </div>
                        <div className="contact-detail">
                            <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=mksk4gv"><img src={instagram} alt="" className='socialmedia' /></a>
                           <a href="https://www.linkedin.com/in/sathish-m-13869b299/"><img src={linkedin} alt=""  className='socialmedia'/></a> 
                           <a href="https://github.com/SATHISH-M-2003"><img src={github} alt=""  className='socialmedia'/></a> 
                           <a href="https://www.facebook.com/share/1BT3RBUTLn/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt=""  className='socialmedia'/></a> 
                        </div>

                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact