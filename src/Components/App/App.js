import React, {useState} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
//components
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import LandingPage from '../LandingPage/LandingPage';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
//css import
import './App.css'

function App() {
  let [isLandingPage, setIsLandingPage]=useState(true);

  const appDisplay =()=>{
    let display=''
    if(isLandingPage === true){
      display=
      <>
        <LandingPage setIsLandingPage={setIsLandingPage} />
      </>
    }
    else{
      display=
      <Router>
      <div className="App">
        <div>
          <Header />
        </div>
        <Switch>
          <div className='App-Body'>
            <Route exact path="/">
              <Home />
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
