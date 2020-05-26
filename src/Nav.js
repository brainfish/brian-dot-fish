import cx from 'classnames';
import { Link, Location } from '@reach/router';
import React from 'react';
import Marquee from './Marquee';
import './Nav.scss';

const NavLink = ({ children, to }) =>
    <Link className="NavLink" to={to}>{children}</Link>


const Nav = () =>
    <Location>
        {({ location }) =>
            {
                const bigMode = location.pathname === "/"
                return (
                    <div className={cx("Nav", {"high-vis": !bigMode})}>
                        <Marquee bigMode={bigMode} />
                        <NavLink to="/about"><h2>About</h2></NavLink>
                        <NavLink to="/reddit"><h2>Reddit</h2></NavLink>
                        <NavLink to="/wedding"><h2>Wedding</h2></NavLink>
                    </div>
                );
            }
        }
    </Location>

export default Nav;