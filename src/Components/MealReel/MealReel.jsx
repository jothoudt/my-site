import React from 'react';
//This component will display the details of the MealReel project that I built.
function MealReel(){
    return(
        <div>
            <div>
                <h2><u>MealReel</u></h2>
            </div>
            <div>
                <img className="project-photos" src="https://i.imgur.com/qcLjnmr.png" height="60%" width="60%"></img>
            </div>
            <div className="project-description">
                <div>
                    <h3><u>Description:</u></h3>
                </div>
                <div>
                    <p>a full CRUD web application with RESTful API. The app allows users to find and try new recipes, which can
                        easily be saved and added to favorites for future use. This project was built in 2 weeks using React,
                        Redux, Node, Express, PostgreSQL and Tasty API.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MealReel;