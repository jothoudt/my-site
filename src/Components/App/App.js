import React from 'react';
//components
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Home from '../Home/Home'
//css import
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className='App-Body'>
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
