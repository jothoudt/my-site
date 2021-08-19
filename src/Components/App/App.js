import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
//components
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Resume from '../Resume/Resume'
//css import
import './App.css'

function App() {
  return (
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
          </div>
        </Switch>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
