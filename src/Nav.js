import { Link, Location } from '@reach/router';
import React from 'react';
import Marquee from './Marquee';
import './Nav.css';

const NavLink = ({ children, to }) =>
    <Link className="NavLink" to={to}>{children}</Link>


const Nav = () =>
    <Location>
        {({ location }) =>
            <div className="Nav">
                <Marquee bigMode={location.pathname === "/"} />
                <NavLink to="/about"><h2>About</h2></NavLink>
            </div>
        }
    </Location>

export default Nav;