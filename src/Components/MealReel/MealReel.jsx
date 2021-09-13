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
                    <p>MealReel is a recipe app. The app allows users to search for recipes, select a random recipe, save their favorite recipes,
                        and also allows users to share their own recipes. This project was built in 2 weeks using React, Redux, Node, Express, PostgreSQL and Tasty API.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MealReel;