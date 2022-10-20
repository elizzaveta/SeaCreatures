import React from 'react';
import pinkFish from "../../../images/creatures/pinkFish.png";
import {useParallax} from "react-scroll-parallax";

const ParallaxPinkFish = () => {
    const parallax = useParallax({
        translateX: ["200%", "140%"],
    });
    const fishStyle = {
        position: "absolute",
        bottom: "6vh",
        height: "23vw"
    }
    return (
            <img ref={parallax.ref} src={pinkFish} style={fishStyle} alt="pink fish"/>
    );
};

export default ParallaxPinkFish;