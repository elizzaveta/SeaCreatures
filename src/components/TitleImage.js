import React from 'react';
import Claw from "../images/creatures/titleClaw.png"
import crab from "../images/creatures/redCrab3.png"
import greenCrab from "../images/creatures/titleGreenCrab.png"
import greenFish from "../images/creatures/titleGreenFish.png"
import redFish from "../images/creatures/titleRedFish.png"
import shell1 from "../images/creatures/titleShell1.png"
import shell2 from "../images/creatures/titleShell2.png"
import shrimp from "../images/creatures/titleShrimp.png"
import pinkCrab from "../images/creatures/titlePinkCrab.png"
import {MouseParallax} from "react-just-parallax";


const TitleImage = () => {
    return (
        <div style={{position: "relative", height: 532, width: 525}}>
            <MouseParallax strength={0.011} isAbsolutelyPositioned={true}>
                <img src={Claw} style={{position: "absolute", height: 227, top: 108, left: 391}}/>
            </MouseParallax>
            <MouseParallax strength={0.022} isAbsolutelyPositioned={true}>
                <img src={crab} style={{position: "absolute", height: 242, top: 5, left: 0}}/>
            </MouseParallax>
            <MouseParallax strength={0.015} isAbsolutelyPositioned={true}>
                <img src={pinkCrab} style={{position: "absolute", height: 130, top: 215, left: 34}}/>
            </MouseParallax>
            <MouseParallax strength={0.009} isAbsolutelyPositioned={true}>
                <img src={greenCrab} style={{position: "absolute", height: 117, top: 410, left: 257}}/>
            </MouseParallax>
            <MouseParallax strength={0.02} isAbsolutelyPositioned={true}>
                <img src={greenFish} style={{position: "absolute", height: 242, top: 206, left: 129}}/>
            </MouseParallax>
            <MouseParallax strength={0.027} isAbsolutelyPositioned={true}>
                <img src={redFish} style={{position: "absolute", height: 142, top: 386, left: 12}}/>
            </MouseParallax>
            <MouseParallax strength={0.031} isAbsolutelyPositioned={true}>
                <img src={shell1} style={{position: "absolute", height: 46, top: 353, left: 0}}/>
            </MouseParallax>
            <MouseParallax strength={0.013} isAbsolutelyPositioned={true}>
                <img src={shell2} style={{position: "absolute", height: 83, top: 0, left: 0}}/>
            </MouseParallax>
            <MouseParallax strength={0.033} isAbsolutelyPositioned={true}>
                <img src={shrimp} style={{position: "absolute", height: 146, top: 0, left: 375}}/>
            </MouseParallax>
        </div>
    );
};

export default TitleImage;