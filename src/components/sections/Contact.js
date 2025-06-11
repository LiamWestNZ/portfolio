import React, {useState} from 'react';
import Content from '../layout/Content';
import ContactIconWrapper from '../layout/ContactIconWrapper';
import ContactIcon from '../layout/ContactIcon';


import {DownloadIcon, SendMailIcon, LinkedInIcon, GithubIcon, EmailIcon} from '../../util/image';
import {encode} from '../../util/index';


export function Contact(props){
    const [yourname, setYourname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    return (
        <section id="contact" className="contact" ref={props.contactRef}>
            <Content>
            <div style={{position: 'relative', bottom: '-300px', left: '20%', color: '#5680E9'}}>
                <h1>Out of order due to host migration,
                        Please email me at liamwc1@gmail.com for contact
                    </h1>
                </div>
                <div style={{color: 'darkgrey', opacity: '20%'}}>
                    
                <div className="form-wrapper">
                    <div className="title">
                        <h1>Contact me</h1>
                        <ContactIconWrapper>

                        <ContactIcon
                                href="\pdf\lwc-cv.pdf"
                                string="My CV"
                                title="View my CV"
                                isMobile={props.isMobile}>
                                <DownloadIcon/>
                            </ContactIcon>

                            <ContactIcon
                                href="mailto:liamwc1@gmail.com"
                                string="Email me"
                                title="Send an email to me."
                                isMobile={props.isMobile}>
                                <EmailIcon/>
                            </ContactIcon>

                            <ContactIcon
                                href="https://www.linkedin.com/in/liam-west-cahill-03765717a/"
                                string="LinkedIn"
                                title="Contact me through my LinkedIn."
                                isMobile={props.isMobile}>
                                <LinkedInIcon/>
                            </ContactIcon>

                            <ContactIcon
                                href="https://www.github.com/liamwestnz"
                                string="Github"
                                title="View my Github."
                                isMobile={props.isMobile}>
                                <GithubIcon/>
                            </ContactIcon>

                        </ContactIconWrapper>
                    </div>
                    <form
                        name="contact"
                        id="contactForm"
                        className="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={(e)=>{
                            e.preventDefault();

                            let formData={
                                yourname: yourname,
                                email: email,
                                message: message,
                            };

                            fetch("/form",{
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded",
                                },
                                body: encode({"form-name": "contact", ...formData}),
                            })
                                .then(()=>{
                                    alert("Message Sent!")
                                    setEmail("")
                                    setYourname("")
                                    setMessage("")
                            })
                                .catch((error)=> alert(error))
                        }}
                        >
                        <input type="hidden" name="form-name" value="contact" />
                        <div hidden>
                            <input name="bot-field"/>
                        </div>
                        <div className={`input-wrapper input ${
                                    yourname.length > 0 ? "filled" : ""}`}>
                                    <label htmlFor="yourname">Your Name</label>
                                    <input type="text" name="yourname" id="yourname" value={yourname} onChange={(e)=>{
                                                setYourname(e.target.value)}                       } required/>
                        </div>
                        <div className={`input-wrapper input ${email.length > 0 ? "filled" : ""}`}>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" value={email} onChange={(e) => {
                                setEmail(e.target.value);
                                }} required />
                        </div>
                        <div className={`input-wrapper textarea ${
                                    message.length > 0 ? "filled" : ""}`}>
                                    <label htmlFor="message">Message</label>
                                    <textarea type="text" name="message" id="message" value={message} onChange={(e) => {
                                    setMessage(e.target.value);
                                    }} required></textarea>
                        </div>
                            <button
                            type="submit" className="submit-button" title="Submit your message">
                                <div className="icon">
                                    <SendMailIcon/>
                                </div>
                                Send Message.
                            </button>
                    </form>
                </div>
                </div>
            </Content>
        </section>
    )
}

export default Contact;