import React from 'react';
import About from '../About/About';
import CurrentlyWorkingOn from '../CurrentlyWorkingOn/CurrentlyWorkingOn';
import Languages from '../Languages/Languages';
import './Home.css'

function Home(){
    return(
        <div className="grid-container">
            <div>
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