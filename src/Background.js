import { Location } from '@reach/router';
import React from 'react';

import bg from './assets/video-bg/avrocar-landing-concrete-groun.mp4';
import bg2 from './assets/video-bg/avrocar-pilot-testing-avrocar-after-mo.mp4';
import bg3 from './assets/video-bg/044609936-astronauts-greeting-window-mob.mp4';

const backgrounds = {
    'about':
        <video autoPlay={true} muted={true} loop={true} id={'video-bg'}>
          <source src={bg3} type="video/mp4" />
        </video>,
    'reddit':
         <video autoPlay={true} muted={true} loop={true} id={'video-bg'}>
          <source src={bg} type="video/mp4" />
        </video>,
    'default': 
        <video autoPlay={true} muted={true} loop={true} id={'video-bg'}>
          <source src={bg2} type="video/mp4" />
        </video>
};

const get_background = (pathname) => {
    const trimmed_pathname = pathname.replace(/^\/+|\/+$/g, '');
    // console.log('pathname: %o trimmed: %o in?: %o', pathname, trimmed_pathname, trimmed_pathname in backgrounds);
    if (trimmed_pathname in backgrounds) {
        return backgrounds[trimmed_pathname];
    }
    return backgrounds['default'];
}

class BackgroundArt extends React.Component {
    render() {
        return get_background(this.props.path);
    }

    componentDidMount(){
        var videoTimer = document.getElementById("video-bg");
        videoTimer.play();
        console.log('we tried');
        const again = () => {
            videoTimer.play();
            console.log('we tried again');
        }
        setTimeout(again, 3000);
    }
}

class Background extends React.Component {
    render() {
        return <Location className="Background">
            {({ location }) => {
                return (
                    <BackgroundArt key={location.pathname} path={location.pathname} />
                );
            }}
        </Location>
    }

}

export default Background;