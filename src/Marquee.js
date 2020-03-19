import React from 'react';
import { Link } from '@reach/router';
import './Marquee.css';

function Marquee() {
  return (
    <div className="Marquee">
        <Link to="/"><h1>brian.fish</h1></Link>
        <Link to="/about/"><h2>About</h2></Link>
        <div className="Marquee-split" />
    </div>
  );
}

export default Marquee;

