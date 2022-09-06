import React from 'react';
import scorpion from "../../../images/creatures/scorpion.png";
import {useParallax} from "react-scroll-parallax";

const ParallaxScorpion = (props) => {
    const {speed, degree, left} = props
    const parallax = useParallax({
        speed: speed
    })
    return (
        <img ref={parallax.ref} src={scorpion} alt="scorpion"
             style={{position: "absolute", top: 150, left: left, height: 395, rotate: `${degree}deg`}}/>

    );
};

export default ParallaxScorpion;