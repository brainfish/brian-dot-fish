import React from 'react';
import { navigate } from '@reach/router';

function About() {
  const logoNavigate = event => {
    event.preventDefault();
    navigate("/404");
  }

  return (
    <div onClick={logoNavigate} className="About">Under construction.</div>
  );
}

export default About;