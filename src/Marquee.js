import cx from 'classnames';
import React from 'react';
import { Link } from '@reach/router';
import logo from './logo.svg';
import './Marquee.scss';

function Marquee({ bigMode }) {
  return (
    <div className={cx('Marquee', { bigMode })}>
      <div className={cx("Marquee-inner", { bigMode })}>
        <img src={logo} className="Marquee-logo" alt="logo" />
        <Link to="/"><h1>brian.fish</h1></Link>
      </div>
    </div>
  );
}

export default Marquee;

