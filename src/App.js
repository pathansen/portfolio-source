import React from 'react';
import logo from './logo.svg';
import './App.css';

import About from './components/About'
import Projects from './components/Projects'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <About />

        <Projects />

      </header>
    </div>
  );
}

export default App;
