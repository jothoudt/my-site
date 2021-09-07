import React from 'react';
import About from '../About/About';
import CurrentlyWorkingOn from '../CurrentlyWorkingOn/CurrentlyWorkingOn';
import './Home.css'

function Home(){
    return(
        <div>
            <h1>Home</h1>
                <div classname="home-container">
                    <div className="about-component">
                        <About />
                    </div>
                    <div className="current-projects-component">
                        <CurrentlyWorkingOn />
                    </div>
                </div>
        </div>
    )
}

export default Home;