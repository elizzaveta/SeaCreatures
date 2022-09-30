import React from 'react';
import {Box} from "@material-ui/core";
import {Container} from "@material-ui/core";
import {creatures} from "../store/CreaturesDescription";
import CreatureDescription from "./CreatureDescription";
import crab1 from "../images/creatures/redCrab2.png"
import crab2 from "../images/creatures/greenCrab.png"
import crab3 from "../images/creatures/orangeCrab.png"
import crab4 from "../images/creatures/redCrab3.png"
import ParallaxWater from "./ParallaxElements/abstract/ParallaxWater";

const CrabBlock = () => {

    return (

        <Box style={{
            position: "relative",
            height: "100%",
            background: "#C6DEE5",
            opacity: 0.8,
            overflow: "hidden",
            display: "flex",
            alignItems:"center"
        }}>
            <Container>
                <CreatureDescription
                    name={creatures.crab.name}
                    description={creatures.crab.description}
                />
            </Container>

            <img src={crab3} height={270} alt="crab"
                 style={{position: "absolute", top: "7vh", left: 170, zIndex: -3, rotate: '150deg'}}/>
            <img src={crab2} height={195} alt="crab"
                 style={{position: "absolute", top: "60vh", left: 255, zIndex: -3, rotate: '22deg'}}/>
            <img src={crab1} height={265} alt="crab"
                 style={{position: "absolute", top: "12vh", left: 1000, zIndex: -3, rotate: '-150deg'}}/>
            <img src={crab4} height={215} alt="crab"
                 style={{position: "absolute", top: "65vh", left: 850, zIndex: -3, rotate: '-22deg'}}/>

            <ParallaxWater/>
        </Box>
    );
};

export default CrabBlock;