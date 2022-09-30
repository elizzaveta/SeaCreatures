import React from 'react';
import TitleBlock from "./TitleBlock";
import FishBlock from "./FishBlock";
import {ParallaxProvider} from "react-scroll-parallax";
import CrabBlock from "./CrabBlock";
import ShrimpBlock from "./ShrimpBlock";
import ScorpionBlock from "./ScorpionBlock";
import Footer from "./Footer";
import InfoBlock from "./InfoBlock";

const Landing = () => {
    return (
        <ParallaxProvider>
            <InfoBlock child={<TitleBlock/>}/>
            <InfoBlock child={<FishBlock/>}/>
            <InfoBlock child={<CrabBlock/>}/>
            <InfoBlock child={<ShrimpBlock/>}/>
            <InfoBlock child={<ScorpionBlock/>}/>
            <Footer/>
        </ParallaxProvider>
    );
};

export default Landing;