import React from 'react';
import About from '../About/About';
import CurrentlyWorkingOn from '../CurrentlyWorkingOn/CurrentlyWorkingOn';
import Languages from '../Languages/Languages';
import './Home.css'
/* This component will be the main page. It
will display my photo, an about me section and list of technologies I've worked
with.*/
function Home(){
    return(
        <div className="grid-container">
            <div className="home-title">
                <h1>Home</h1>
            </div>
            <div classname="home-container">
                <div className="about-component">
                    <About />
                </div>
                <div className="current-projects-component">
                    <CurrentlyWorkingOn />
                </div>                    
            </div>
            <div className="languages-info">
                <Languages />
            </div>
        </div>
    )
}

export default Home;