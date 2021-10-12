import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Contact.css'

//this component displays contact info

function Contact(){

    return(
        <div className="contact-container">
            <div className="contact-photo">
                {/* <img src="https://i.imgur.com/9qQonX4.jpg"  width="100%"/> */}
                <h1>Contact Me</h1>
            </div>
            <div className="contact-text">
                <h2><i>Let's have a chat!</i></h2>
            </div>
            <div>
                <PhoneIcon style={{fontSize:"36px", marginTop:"25px", marginBottom: "12px"}} />
                <p><strong className="label-contact"><u>Phone:</u></strong> (763) 706-7010</p>
            </div>
            <div>
                <EmailIcon style={{fontSize:"36px", marginTop:"12px", marginBottom: "12px"}} />
                <p><strong className="label-contact"><u>Email:</u></strong> othoudtjonathan@gmail.com</p>
            </div>
            <div>
                <LinkedInIcon style={{fontSize:"36px", marginTop:"25px", marginBottom: "12px"}} />
                <p><strong className="label-contact"><u>LinkedIn:</u></strong><a href="https://www.linkedin.com/in/jonathan-othoudt-89b45789/"> https://www.linkedin.com/in/jonathan-othoudt-89b45789/  </a></p>
            </div>
        </div>
    )
}

export default Contact;