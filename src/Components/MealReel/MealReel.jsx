import React from 'react';
//This component will display the details of the MealReel project that I built.
function MealReel(){
    return(
        <div>
            <div>
                <h2 className="this-project-title"><u>MealReel</u></h2>
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
                    <li>Tasty API</li>
                </ul>
            </div>
            <div>
                <img className="project-photos" src="https://i.imgur.com/qcLjnmr.png" height="50%" width="50%"></img>
            </div>
            <div className="project-description">
                <div>
                    <h3><u>Description:</u></h3>
                </div>
                <div>
                    <p> This is a full CRUD web application with a RESTful API. The app allows users to find and try new recipes, which can
                        easily be saved and added to favorites for future use. This project was built in 2 weeks using React,
                        Redux, Node, Express, PostgreSQL and Tasty API.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MealReel;