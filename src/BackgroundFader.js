import { Location } from '@reach/router';
import React from 'react';

import './Background.css';
import bg from './assets/video-bg/avrocar-landing-concrete-groun.mp4';
import bg2 from './assets/video-bg/avrocar-pilot-testing-avrocar-after-mo.mp4';
import bg3 from './assets/video-bg/044609936-astronauts-greeting-window-mob.mp4';

const backgrounds = {
    'about': bg3,
    'reddit': bg,
    'default': bg2
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
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            loading: true
        }
        this.handleVideoLoaded = this.handleVideoLoaded.bind(this);
    }


    // componentDidMount(){
    //     var videoTimer = document.getElementById("video-bg");
    //     videoTimer.play();
    //     console.log('we tried');
    // }
    componentDidMount() {
        const component = this;
        if (this.video) {
            this.video.addEventListener("loadeddata", component.handleVideoLoaded);
        }
    }

    componentWillUnmount() {
        const component = this;
        if (this.video) {
            this.video.removeEventListener("loadeddata", component.handleVideoLoaded);
        }
    }

    handleVideoLoaded() {
        console.log('DONE LOADING!');
        this.setState({ loading: false });
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
                    // position: "fixed"
                    opacity: this.state.loading ? 0 : 1,
                    transition: 'opacity, 2s ease-in-out'
                }}
            >
                <source src={get_background(this.props.path)} type="video/mp4" />
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