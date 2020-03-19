import { Router, navigate } from '@reach/router';
import React from 'react';
import Nav from './Nav';
import './App.css';

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
        <Nav />
      </header>
      <div className="App-content">
        <Router>
          <Home path="/" />
          <About path="/about" />
          <NotFound default />
        </Router>
      </div>
    </div>
  );
}

export default App;
