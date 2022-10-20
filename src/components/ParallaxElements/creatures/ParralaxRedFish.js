import React from 'react';
import redFish from "../../../images/creatures/redFish.png";
import {useParallax} from "react-scroll-parallax";

const ParallaxRedFish = () => {
    const parallax = useParallax({
        translateX: ["-50%", "0%"],
        easing: 'easeInQuad'
    });
    const fishStyle = {
        top: "5vh",
        position:"absolute",
        height: "21vw"
    }
    return (
            <img src={redFish} ref={parallax.ref}  style={fishStyle} alt="red fish"/>
    );
};

export default ParallaxRedFish;