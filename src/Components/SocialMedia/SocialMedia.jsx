import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './SocialMedia.css'

// This component will return the icons to link to social media accounts
function SocialMedia(){

    return(
        <div>
            <SocialIcon url="https://www.linkedin.com/in/jonathan-othoudt-89b45789/" style={{margin: "2px"}} />
            <SocialIcon url="https://github.com/jothoudt" style={{margin: "2px"}} bgColor="white" />
        </div>
    )
}

export default SocialMedia