import React from 'react';
import {MouseParallax} from "react-just-parallax";

const ParallaxPinkCircle = () => {
    return (
        <MouseParallax strength={0.01} zIndex={-1} lerpEase={0.2}>
            <div style={{height:100, width:100, marginTop:44, background:"#FD8894", borderRadius:50}}/>
        </MouseParallax>
    );
};

export default ParallaxPinkCircle;