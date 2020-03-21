import { Router } from '@reach/router';
import React from 'react';
import Background from './Background';
import Nav from './Nav';
import './App.scss';
// eslint-disable-next-line
import bg from './assets/video-bg/avrocar-landing-concrete-groun.mp4';
// eslint-disable-next-line
import bg2 from './assets/video-bg/avrocar-pilot-testing-avrocar-after-mo.mp4';
import About from './pages/About';
import { NotFound } from './pages/Error';
import Reddit from './pages/Reddit';

function Home() {
  return (
    <div class="Home"></div>
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
      <Router className="App-background">
        <Background path="/" />
        <Background path="/about" />
        <Background path="/reddit" />
        <NotFound default />
      </Router>
        {/* <Background /> */}
        {/* <video autoPlay={true} muted={true} loop={true} id={'video-bg'}>
          <source src={bg2} type="video/mp4" />
        </video> */}
    </div>
  );
}

export default App;
