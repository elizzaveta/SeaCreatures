import React from 'react';
import {theme} from "../styles/Theme";
import {Box, ThemeProvider} from "@material-ui/core";
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
        <ThemeProvider theme={theme}>
            <Box style={{
                position: "relative",
                height: window.innerHeight,
                background: "#C6DEE5",
                opacity: 0.8,
                overflow: "hidden"
            }}>
                <Container style={{position: "relative"}}>
                    <CreatureDescription
                        name={creatures.crab.name}
                        description={creatures.crab.description}
                        titleColor="custom"/>
                </Container>

                <img src={crab3} height={270}
                     style={{position: "absolute", top: 50, left: 170, zIndex: -3, rotate: '150deg'}}/>
                <img src={crab2} height={195}
                     style={{position: "absolute", top: 446, left: 255, zIndex: -3, rotate: '22deg'}}/>
                <img src={crab1} height={265}
                     style={{position: "absolute", top: 70, left: 1000, zIndex: -3, rotate: '-150deg'}}/>
                <img src={crab4} height={215}
                     style={{position: "absolute", top: 449, left: 850, zIndex: -3, rotate: '-22deg'}}/>

                <ParallaxWater/>
            </Box>
        </ThemeProvider>
    );
};

export default CrabBlock;