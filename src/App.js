import React from 'react';
import cloud from './cloud.png'
import './App.css';

import About from './components/About'
import Projects from './components/Projects'

function App() {

  return (
    <div className="App">
      <header style={{backgroundImage:`url(${cloud})`}} className="App-header">

        <About />

        <Projects />

      </header>
    </div>
  );
}

export default App;
