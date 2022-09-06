import React from 'react';
import topWater from "../../../images/abstractElements/topWater.png";
import bottomWater from "../../../images/abstractElements/bottomWater.png";
import {useParallax} from "react-scroll-parallax";
import {MouseParallax} from "react-just-parallax";

const ParallaxWater = () => {
    const parallaxTop = useParallax({
        speed: 10
    })
    const parallaxBottom = useParallax({
        speed: 5
    })
    return (
        <div>
            <MouseParallax strength={0.03} isAbsolutelyPositioned={true} zIndex={-1}>
                <img ref={parallaxTop.ref} src={topWater} alt="water"
                     style={{position: "absolute", top: -150, zIndex: -1, width: "110%", left: "-5%"}}/>
            </MouseParallax>
            <MouseParallax strength={0.019} isAbsolutelyPositioned={true} zIndex={-2}>
                <img ref={parallaxBottom.ref} src={bottomWater} alt="water"
                     style={{position: "absolute", top: -100, zIndex: -2, width: "110%", left: "-5%"}}/>
            </MouseParallax>
        </div>
    );
};

export default ParallaxWater;