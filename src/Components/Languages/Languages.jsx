import React from 'react';
import Box from '@material-ui/core/Box';
import './Languages.css'
//This will display the technologies and skills
function Languages(){
    return(
        <>
        {/* This box will show if the screen is bigger than 801px */}
        <Box className="languages-container" border={2} boxShadow={12} style={{padding:"10px", width:"90%", marginLeft:"auto", marginRight:"auto", marginTop:"25px"}} borderColor="black">
            <div className="frequently-used">
                <div >
                    <h3>Technologies I have used frequently:</h3>
                </div>
                <div>
                <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>CSS</li>
                    <li>Material UI</li>
                    <li>Bootstrap</li>
                    <li>Git</li>
                    <li>Github</li>
                    <li>Heroku</li>
                </ul>      
                </div>
            </div>
            <div className="tech-used">
                <div>
                    <div>
                        <h3>Languages and Technologies I have some experience with</h3>
                    </div>
                    <div>
                        <ul>
                            <li>Python</li>
                            <li>Ruby on Rails</li>
                            <li>TypeScript</li>
                            <li>Stripe</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="soft-skills">
                <div>
                <div>
                    <h3>Soft Skills:</h3>
                </div>
                <div>
                    <ul>
                        <li>Problem Solving</li>
                        <li>Customer Service</li>
                        <li>Creative</li>
                        <li>Teamwork</li>
                        <li>Communication</li>
                        <li>Project Management</li>
                    </ul>
                </div>
                </div>
            </div> 
        </Box>
        {/* This box will show if the user's screen is smaller than 800px */}
        <Box className="languages-container-mobile" border={2} boxShadow={12} style={{padding:"10px", width:"100vw",marginTop:"25px"}} borderColor="black">
        <div className="frequently-used">
            <div >
                <h3>Technologies I have used frequently:</h3>
            </div>
            <div>
            <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>CSS</li>
                <li>Material UI</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>Github</li>
                <li>Heroku</li>
            </ul>      
            </div>
        </div>
        <div className="tech-used">
            <div>
                <div>
                    <h3>Languages and Technologies I have some experience with</h3>
                </div>
                <div>
                    <ul>
                        <li>Python</li>
                        <li>Ruby on Rails</li>
                        <li>TypeScript</li>
                        <li>Stripe</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="soft-skills">
            <div>
            <div>
                <h3>Soft Skills:</h3>
            </div>
            <div>
                <ul>
                    <li>Problem Solving</li>
                    <li>Customer Service</li>
                    <li>Creative</li>
                    <li>Teamwork</li>
                    <li>Communication</li>
                    <li>Project Management</li>
                </ul>
            </div>
            </div>
        </div> 
    </Box>
    </>
    )
}

export default Languages;