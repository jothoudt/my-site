import React from 'react';
import './Languages.css'

function Languages(){
    return(
        <div className="languages-container" >
            <div className="frequently-used">
                <div >
                    <h3>Languages and Technologies I have used frequently:</h3>
                </div>
                <div>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>Material UI</li>
                    <li>Bootstrap</li>
                    <li>Git</li>
                    <li>Github</li>
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
        </div>
    )
}

export default Languages;