import React from 'react';
import pinkFish from "../../../images/creatures/pinkFish.png";
import {useParallax} from "react-scroll-parallax";

const ParallaxPinkFish = (props) => {
    const {top} = props
    const parallax = useParallax({
        translateX: [100, 68],
    });
    const fishStyle = {
        position: "absolute",
        top: top,
        height: 265
    }
    return (
        <div ref={parallax.ref}>
            <img src={pinkFish} style={fishStyle}/>
        </div>
    );
};

export default ParallaxPinkFish;