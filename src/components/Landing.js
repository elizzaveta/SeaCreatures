import React from 'react';
import TitleBlock from "./TitleBlock";
import FishBlock from "./FishBlock";
import {ParallaxProvider} from "react-scroll-parallax";
import CrabBlock from "./CrabBlock";
import ShrimpBlock from "./ShrimpBlock";
import ScorpionBlock from "./ScorpionBlock";
import Footer from "./Footer";

const Landing = () => {
    return (
        <ParallaxProvider>
            <TitleBlock/>
            <FishBlock/>
            <CrabBlock/>
            <ShrimpBlock/>
            <ScorpionBlock/>
            <Footer/>
        </ParallaxProvider>
    );
};

export default Landing;