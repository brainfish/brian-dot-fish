import { Location } from '@reach/router';
import React from 'react';

import './Background.css';
import bg_avrocar1 from './assets/video-bg/avrocar-pilot-testing.mp4';
import bg_avrocar2 from './assets/video-bg/avrocar-landing-concrete.mp4';
import bg_astronauts from './assets/video-bg/astronauts-greeting-window.mp4';
import bg_explosion from './assets/video-bg/explosion-taking-place.mp4';

const backgrounds = {
    'about': bg_astronauts,
    'reddit': bg_avrocar2,
    '': bg_avrocar1,
    '404': bg_explosion,
    'SENTINEL_default': bg_avrocar2
};

const getBackground = (pathname) => {
    const trimmedPathname = pathname.replace(/^\/+|\/+$/g, '');
    if (trimmedPathname in backgrounds) {
        return backgrounds[trimmedPathname];
    }
    return backgrounds['SENTINEL_default'];
}

class BackgroundArt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            loading: true
        }
    }

    componentDidMount() {
        if (this.video) {
            this.video.addEventListener("loadeddata", this.handleVideoLoaded);
        }
    }

    componentWillUnmount() {
        if (this.video) {
            this.video.removeEventListener("loadeddata", this.handleVideoLoaded);
        }
    }

    handleVideoLoaded = () => {
        this.setState({
            loading: false
        });
    }

    render() {
        return(
            <video
                autoPlay
                muted
                loop
                id={'video-bg'}
                ref={ref => (this.video = ref)}
                style={{
                    opacity: this.state.loading ? 0 : 1,
                }}
            >
                <source src={getBackground(this.props.path)} type="video/mp4" />
            </video>
       )
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