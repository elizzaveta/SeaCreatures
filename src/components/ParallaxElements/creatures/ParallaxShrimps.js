import React from 'react';
import shrimp1 from "../../../images/creatures/shrimp1.png"
import shrimp2 from "../../../images/creatures/shrimp2.png"
import shrimp3 from "../../../images/creatures/shrimp3.png"
import shrimp4 from "../../../images/creatures/shrimp4.png"
import {useParallax} from "react-scroll-parallax";


const ParallaxShrimps = () => {
    const parallaxShrimp1 = useParallax({
        scale: [0.7, 1, 'easeInQuad'],
    })
    const parallaxShrimp2 = useParallax({
        scale: [1.3, 1, 'easeInQuad'],
    })
    const parallaxShrimp3 = useParallax({
        scale: [0.7, 1, 'easeInQuad'],
    })
    const parallaxShrimp4 = useParallax({
        scale: [1, 0.8, 'easeInQuad'],
    })
    return (
        <div>
            <img ref={parallaxShrimp1.ref} src={shrimp1} alt="shrimp"
                 style={{position: "absolute", width:"15vw", top: "12vh", left: "7vw"}}/>
            <img ref={parallaxShrimp2.ref} src={shrimp2} alt="shrimp"
                 style={{position: "absolute", width:"13vw", top: "40vh", left: "12vw"}}/>
            <img ref={parallaxShrimp3.ref} src={shrimp3} alt="shrimp"
                 style={{position: "absolute", width:"16vw", top: "65vh", right: "20vw"}}/>
            <img ref={parallaxShrimp4.ref} src={shrimp4} alt="shrimp"
                 style={{position: "absolute", width:"12vw", top: "80vh", right: "9vw"}}/>
        </div>
    );
};

export default ParallaxShrimps;