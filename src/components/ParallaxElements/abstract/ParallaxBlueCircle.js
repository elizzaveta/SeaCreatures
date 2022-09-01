import React from 'react';
import {MouseParallax} from "react-just-parallax";

const ParallaxBlueCircle = (props) => {
    const {strength, top, left} = props;
    return (
        <MouseParallax strength={strength} isAbsolutelyPositioned={true}>
            <div style={{
                top: top,
                left: left,
                height: 65,
                width: 65,
                background: "#B0D4DF",
                borderRadius: "100%",
                position:"absolute"
            }}/>
        </MouseParallax>
    );
};

export default ParallaxBlueCircle;