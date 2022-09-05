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
        <div style={{position: "relative", height: "inherit", width: "inherit"}}>
            <MouseParallax strength={0.011} isAbsolutelyPositioned={true}>
                <img src={Claw} style={{position: "absolute", height: "42.7%", top: "20%", left: "74.5%"}}/>
            </MouseParallax>
            <MouseParallax strength={0.022} isAbsolutelyPositioned={true}>
                <img src={crab} style={{position: "absolute", height: "45.5%", top: "0.9%", left: 0}}/>
            </MouseParallax>
            <MouseParallax strength={0.015} isAbsolutelyPositioned={true}>
                <img src={pinkCrab} style={{position: "absolute", height: "24.4%", top: "40.4%", left: "6.5%"}}/>
            </MouseParallax>
            <MouseParallax strength={0.009} isAbsolutelyPositioned={true}>
                <img src={greenCrab} style={{position: "absolute", height: "22%", top: "77%", left: "49%"}}/>
            </MouseParallax>
            <MouseParallax strength={0.02} isAbsolutelyPositioned={true}>
                <img src={greenFish} style={{position: "absolute", height: "45.5%", top: "38.7%", left: "24.6%"}}/>
            </MouseParallax>
            <MouseParallax strength={0.027} isAbsolutelyPositioned={true}>
                <img src={redFish} style={{position: "absolute", height: "26.7%", top: "72.6%", left: "2.3%"}}/>
            </MouseParallax>
            <MouseParallax strength={0.031} isAbsolutelyPositioned={true}>
                <img src={shell1} style={{position: "absolute", height: "8.6%", top: "66.3%", left: 0}}/>
            </MouseParallax>
            <MouseParallax strength={0.013} isAbsolutelyPositioned={true}>
                <img src={shell2} style={{position: "absolute", height: "15.6%", top: 0, left: 0}}/>
            </MouseParallax>
            <MouseParallax strength={0.033} isAbsolutelyPositioned={true}>
                <img src={shrimp} style={{position: "absolute", height: "27.4%", top: 0, left: "71.4%"}}/>
            </MouseParallax>
        </div>
    );
};

export default TitleImage;