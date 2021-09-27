import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

function Footer(){
    //this return will display a footer with my name, contact info and social media links
    return(
        <div className='footer-container'>
            <div className="my-info">
                Jonathan Othoudt
                <br></br>
                (763) 706-7010 || othoudtjonathan@gmail.com
            </div>
        </div>
    )
}

export default Footer;