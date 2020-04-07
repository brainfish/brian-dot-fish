import cx from 'classnames';
import { Router } from '@reach/router';
import React from 'react';
import BackgroundFader from './BackgroundFader';
import Nav from './Nav';
import './App.scss';
import About from './pages/About';
import { NotFound } from './pages/Error';
import Reddit from './pages/Reddit';

function Home() {
  return (
    <div className="Home"></div>
  );
}


function AppRouter({ className }) {
  return (
    <div className="AppRouter">
      <Router className={cx("AppRouter-inner", className)}>
            <Home path="/" />
            <About path="/about" />
            <Reddit path="/reddit" />
            <NotFound default />
      </Router>
      <div className="App-background">
        <BackgroundFader />
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <AppRouter className="App-content" />
    </div>
  );
}

export default App;
