import React from 'react';
import './Resume.css'

function Resume(){
    return(
        <div className="resume-container">
            <div className="resume-title"><h1>Resume</h1></div>
            <div className="resume-text-area">
                <h4>To view resume please click <a href='resources/Jonathan_Othoudt_Resume.pdf' target='_blank' rel='noopener noreferrer'>here</a>.</h4>
            </div>
        </div>
    )
}

export default Resume;