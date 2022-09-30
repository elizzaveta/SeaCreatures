import React from 'react';
import {creatures} from "../store/CreaturesDescription";
import CreatureDescription from "./CreatureDescription";
import {Container} from "@material-ui/core";
import ParallaxScorpion from "./ParallaxElements/creatures/ParallaxScorpion";
import ParallaxBlueCircle from "./ParallaxElements/abstract/ParallaxBlueCircle";
import {theme} from "../styles/Theme";

const ScorpionBlock = () => {
    return (
        <Container style={{height: "90%", padding:10, marginTop:50}}>
            <div style={{
                width: "100%",
                height: "100%",
                border: "solid 1px blue",
                borderRadius: 20,
                overflow: "hidden",
                position: "relative"
            }}>
                <CreatureDescription name={creatures.scorpion.name} description={creatures.scorpion.description}
                             />
                <ParallaxScorpion speed={30} degree={0} left={50}/>
                <ParallaxScorpion speed={30} degree={180} left={850}/>
                <ParallaxBlueCircle top={100} left={410} strength={0.04}/>
                <ParallaxBlueCircle top={495} left={780} strength={-0.04}/>
            </div>
        </Container>
    );
};

export default ScorpionBlock;