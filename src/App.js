import { Router } from '@reach/router';
import React from 'react';
import Nav from './Nav';
import './App.scss';
// eslint-disable-next-line
import bg from './assets/video-bg/avrocar-landing-concrete-groun.mp4';
import bg2 from './assets/video-bg/avrocar-pilot-testing-avrocar-after-mo.mp4';
import About from './pages/About';
import { NotFound } from './pages/Error';
import Reddit from './pages/Reddit';

function Home() {
  return (
    <div class="Home">Welcome home!</div>
  );
}


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
          <Reddit path="/reddit" />
          <NotFound default />
        </Router>
      </div>
      <div className="App-background">
        <video autoPlay={true} muted={true} loop={true} id={'video-bg'}>
          <source src={bg2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
