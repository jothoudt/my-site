import React from 'react';
import Box from '@material-ui/core/Box';
import './About.css'
// This component returns my photo and a small about me section
function About(){

    return(
        <Box classname="about-me" border={2} boxShadow={12} style={{padding:"10px"}} borderColor="black">
            <div  className="about-me-container">
                <div className="my-photo">
                    <img className="my-self-image" src="https://i.imgur.com/PpFib9h.jpg" alt="Picture of Jonathan Othoudt"></img>
                </div>
                <div className="about-me-info">
                    <h2><u>About Me</u></h2>
                    <p>I love coding and learning new tech skills. When I'm not I'm not building
                        or learning new things, I have a variety of interests I like to enjoy. I love films and tv, playing
                        video games, music and dancing, playing and watching a variety of sports, and traveling with my family.
                    </p>
                </div>
            </div>
        </Box>
    )
}

export default About;