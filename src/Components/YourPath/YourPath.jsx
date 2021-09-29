import React from 'react';
import './YourPath.css'

//This component will display the details of the YourPath project that I have worked on.
function YourPath(){
    return(
        <div className="this-project-container">
            <div>
                <h2><u>YourPath</u></h2>
            </div>
            <div>
                <h3>Technologies used:</h3>
                <ul className="tech-list">
                    <li>React</li>
                    <li>Redux</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>Material UI</li>
                </ul>
            </div>
            <div>
                <img className="project-photos" src="https://i.imgur.com/mRnDe0f.png" height="270px" width="500px"></img>
                <img className="project-photos" src="https://i.imgur.com/XaEHYfs.png" height="270px" width="500px" ></img>
            </div>
            <div className="project-description">
                <h3><u>Description:</u></h3>
                <p>The Yourpath project was built for an organization that helps individuals
                    with substance abuse on their path to treatment. While remotely working with a team,
                    we were tasked with building an application that represented a variety of user data collected
                    through an assessment form on YourPath's website. We targeted the Jotform Api, where the information
                    was being stored, and built a customizable dashboard to display the information in a variety of
                    charts, tables and graphs. This project was built in 3 weeks using React, Redux, Node, Express, PostgreSQL,
                    Material UI and Jotform API.
                </p>
            </div>
        </div>
    )
}

export default YourPath;