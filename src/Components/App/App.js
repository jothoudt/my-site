import React, {useState} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
//components
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import LandingPage from '../LandingPage/LandingPage';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
//css import
import './App.css'

function App() {
  //use state variable to establish what will be displayed
  let [isLandingPage, setIsLandingPage]=useState(true);
  //this conditionally renders the display
  const appDisplay =()=>{
    let display=''
    /* If the user is just arriving to the page the display
   will be a full view landing page */
    if(isLandingPage === true){
      display=
      <>
        <LandingPage setIsLandingPage={setIsLandingPage} />
      </>
    }
    //otherwise when they click next on the landing page it will display the main app
    else{
      display=
      <Router>
      <div className="App">
        <div>
          <Header />
        </div>
        <Switch>
          <div className='App-Body'>
            <Route exact path={["/","/home"]}>
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
          </div>
        </Switch>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
    }
    return display;
  }

  return (
    <div>
      {appDisplay()}
    </div>
  );
}

export default App;
