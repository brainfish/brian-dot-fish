import { Router, navigate } from '@reach/router';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Marquee from './Marquee';

function Home() {
  return (
    <div class="Home">Welcome home!</div>
  );
}

function About() {
  const logoNavigate = event => {
    event.preventDefault();
    navigate("/404");
  }

  return (
    <div onClick={logoNavigate} class="About">Not much to say about me, yet.</div>
  );
}

const NotFound = () => <h1>Sorry, nothing here.</h1>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Marquee />
      <div className="App-content">
        <Router>
          <Home path="/" />
          <About path="/about" />
          <NotFound default />
        </Router>
      </div>
      </header>
    </div>
  );
}

export default App;
