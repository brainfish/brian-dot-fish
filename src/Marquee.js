import cx from 'classnames';
import React from 'react';
import { Link } from '@reach/router';
import logo from './logo.svg';
import './Marquee.scss';

function Marquee({ bigMode }) {
  return (
    <div className={cx('Marquee', { bigMode })}>
      <div className="Marquee-inner">
        <img src={logo} className="Marquee-logo" alt="logo" />
        <Link to="/"><h1>brian.fish</h1></Link>
        <div className="Marquee-split" />
      </div>
    </div>
  );
}

export default Marquee;

