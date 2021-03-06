import cx from 'classnames';
import React from 'react';
import { Link } from '@reach/router';
import logo from './assets/brian.fish logo.png';
import './Marquee.scss';

function Marquee({ bigMode }) {
  return (
    <div className={cx('Marquee', { bigMode })}>
      <div className={cx("Marquee-inner", { bigMode })}>
        <Link to="/">
          <img src={logo} className="Marquee-logo" alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Marquee;

