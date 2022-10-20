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

            <img src={crab3}  alt="crab"
                 style={{width:"18vw", position: "absolute", top: "8vh", right: "65vw", zIndex: -3, rotate: '150deg'}}/>
            <img src={crab2} alt="crab"
                 style={{width:"25vw",position: "absolute", bottom: "9vh", right: "60vw", zIndex: -3, rotate: '22deg'}}/>
            <img src={crab1}  alt="crab"
                 style={{width:"23vw",position: "absolute", top: "10vh", left: "60vw", zIndex: -3, rotate: '-150deg'}}/>
            <img src={crab4}  alt="crab"
                 style={{width:"23vw",position: "absolute", bottom: "7vh", left: "60vw", zIndex: -3, rotate: '-22deg'}}/>

            <ParallaxWater/>
        </Box>
    );
};

export default CrabBlock;