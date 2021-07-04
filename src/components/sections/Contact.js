import React, {useState} from 'react';
import Content from '../layout/Content';
import ContactIconWrapper from '../layout/ContactIconWrapper';
import ContactIcon from '../layout/ContactIcon';

import { SendMailIcon, LinkedInIcon, GithubIcon, EmailIcon } from '../../util/image';


export function Contact(props){
    const [yourname, setYourname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    return (
        <section id="contact" className="contact" ref={props.contactRef}>
            <Content>
                <div className="form-wrapper">
                    <div className="title">
                        <h1>Contact me</h1>
                        <ContactIconWrapper>

                            <ContactIcon
                                href="mailto:me@liamwest.co.nz"
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
                    <form>
                        <input type="hidden" name="form-name" value="contact" />
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
            </Content>

        </section>
    )
}

export default Contact;