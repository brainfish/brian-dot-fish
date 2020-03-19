import React from 'react';
import logo from './logo.svg';
import './App.css';
import Marquee from './Marquee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Marquee />
      </header>
    </div>
  );
}

export default App;
