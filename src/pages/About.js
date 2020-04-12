import React from 'react';
import { navigate } from '@reach/router';
import imageConstruction1 from '../assets/90s-under-construction.gif';
import imageConstruction2 from '../assets/90s-under-construction-spin1.gif';
import imageConstruction3 from '../assets/90s-under-construction-spin2.gif';
import './About.scss';

function About() {
  const logoNavigate = event => {
    event.preventDefault();
    navigate("/404");
  }

  const spinny1 = <img className="imgConstructionSpinny1" src={imageConstruction2} alt="Just like the 90s" />;
  const spinny2 = <img className="imgConstructionSpinny2" src={imageConstruction3} alt="Just like the 90s" />;

  return (
    <div onClick={logoNavigate} className="About">
      <div><img className="imgConstruction" src={imageConstruction1} alt="Under Construction" /></div>
      <div>
        {spinny1}{spinny2}Under Construction{spinny2}{spinny1}
      </div>
    </div>
  );
}

export default About;