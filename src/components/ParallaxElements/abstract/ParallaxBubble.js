import React from 'react';
import {useParallax} from "react-scroll-parallax";
import {MouseParallax} from "react-just-parallax";

const ParallaxBubble = (props) => {
    const {radius, top, left, speed,strength} = props

    const style = {
        height: radius,
        width: radius,
        borderRadius: '100%',
        border: '1px solid #54BAA7',
        position:'absolute',
        top:top,
        left:left,
        zIndex:-3
    }

    const parallax = useParallax({
        speed:speed
    })

    return (
        <MouseParallax strength={strength} isAbsolutelyPositioned={true}><div ref={parallax.ref} style={style}/></MouseParallax>
    );
};

export default ParallaxBubble;