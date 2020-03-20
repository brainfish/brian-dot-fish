import React from 'react';
import { navigate } from '@reach/router';

function About() {
  const logoNavigate = event => {
    event.preventDefault();
    navigate("/404");
  }

  return (
    <div onClick={logoNavigate} class="About">Not much to say about me, yet.</div>
  );
}

export default About;