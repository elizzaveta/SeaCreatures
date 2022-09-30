import React from 'react';
import {Container} from "@material-ui/core";
import ParallaxPinkFish from "./ParallaxElements/creatures/ParallaxPinkFish";
import ParallaxRedFish from "./ParallaxElements/creatures/ParralaxRedFish";
import ParallaxBackground from "./ParallaxElements/abstract/ParallaxBackground";
import ParallaxBubble from "./ParallaxElements/abstract/ParallaxBubble";
import {creatures} from "../store/CreaturesDescription";
import CreatureDescription from "./CreatureDescription";

const FishBlock = () => {


    return (
        <Container style={{position: "relative", height: "100%"}}>
        <div style={{height:"100%"}}>
            <CreatureDescription name={creatures.fish.name} description={creatures.fish.description} titleColor="secondary"/>

            <ParallaxPinkFish/>
            <ParallaxRedFish/>

            <ParallaxBackground/>

            <ParallaxBubble radius={40} top={80} left={400} speed={-5} strength={-0.01}/>
            <ParallaxBubble radius={40} top={90} left={1000} speed={-4} strength={0.03}/>
            <ParallaxBubble radius={30} top={470} left={100} speed={-7} strength={-0.04}/>
            <ParallaxBubble radius={20} top={360} left={900} speed={-6} strength={0.04}/>


        </div>
        </Container>
    );
};

export default FishBlock;