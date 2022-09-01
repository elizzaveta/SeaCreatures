import React from 'react';
import redFish from "../../../images/creatures/redFish.png";
import {useParallax} from "react-scroll-parallax";

const ParallaxRedFish = (props) => {
    const {top} = props
    const parallax = useParallax({
        translateX: [-50, -4],
        easing: 'easeInQuad'
    });
    const fishStyle = {
        position: "absolute",
        top: top,
        height: 265
    }
    return (
        <div ref={parallax.ref}>
            <img src={redFish} style={fishStyle}/>
        </div>
    );
};

export default ParallaxRedFish;