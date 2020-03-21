import React from 'react';

import bg from './assets/video-bg/avrocar-landing-concrete-groun.mp4';
import bg2 from './assets/video-bg/avrocar-pilot-testing-avrocar-after-mo.mp4';
import bg3 from './assets/video-bg/044609936-astronauts-greeting-window-mob.mp4';

const backgrounds = {
    'stuff':
        <video autoplay={true} muted={true} loop={true} id={'video-bg'}>
          <source src={bg3} type="video/mp4" />
        </video>,
    'reddit':
        <video autoplay={true} muted={true} loop={true} id={'video-bg'}>
          <source src={bg} type="video/mp4" />
        </video>,
    'default': 
        <video autoPlay={true} muted={true} loop={true} id={'video-bg'}>
          <source src={bg2} type="video/mp4" />
        </video>
};

const get_background = (pathname) => {
    const trimmed_pathname = pathname.replace(/^\/+|\/+$/g, '');
    console.log('pathname: %o trimmed: %o in?: %o', pathname, trimmed_pathname, trimmed_pathname in backgrounds);
    if (trimmed_pathname in backgrounds) {
        return backgrounds[trimmed_pathname];
    }
    return backgrounds['default'];
}

const Background = ({ path }) =>
    get_background(path);
    // <Location>
    //     {({ location }) => get_background(location.pathname)}
    // </Location>

export default Background;