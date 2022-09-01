import React, {useState} from 'react';
import {useParallax} from "react-scroll-parallax";

const ParallaxBackground = () => {
    const [style, setStyle] = useState({
        background: "rgba(217,246,242,0.49)",
        height: window.innerHeight,
        width: '120%',
        position: 'absolute',
        zIndex: -5,
        top: 0,
        left: "-10%",
        borderRadius: "100% 100% 0 0"
    })
    const parallax = useParallax({
        speed: 20,
        easing: 'easeIn',
        translateY: [0, -10],
    });
    window.addEventListener("scroll", () => {
        const visiblePxOnScreen = window.innerHeight - document.getElementById('bg').getBoundingClientRect().top;
        if (visiblePxOnScreen > 0) {
            const radius = 100 - (visiblePxOnScreen / window.innerHeight) * 100

            setStyle({
                ...style,
                borderRadius: `${radius}% ${radius}% 0 0`
            })
        }

    })
    return (
        <div ref={parallax.ref} id="bg"
             style={style}>

        </div>
    );
};

export default ParallaxBackground;