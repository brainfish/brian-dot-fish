import React from 'react';
import { Link } from '@reach/router';
import logo from './logo.svg';
import './Marquee.css';

function Marquee({ bigMode }) {
  console.log('bigMode: %o', bigMode);
  return (
    <div className="Marquee">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/"><h1>brian.fish</h1></Link>
        <Link to="/about/"><h2>About</h2></Link>
        <div className="Marquee-split" />
    </div>
  );
}

export default Marquee;

