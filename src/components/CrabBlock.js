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
import styles from "../styles/CSSmodules/CrabBlock.module.css"

const CrabBlock = () => {

    return (
        <Box className={styles.wrapper}>
            <Container>
                <CreatureDescription
                    name={creatures.crab.name}
                    description={creatures.crab.description}
                />
            </Container>

            <img src={crab3}  alt="crab" className={styles.crab3}/>
            <img src={crab2} alt="crab" className={styles.crab2}/>
            <img src={crab1}  alt="crab" className={styles.crab1}/>
            <img src={crab4}  alt="crab" className={styles.crab4}/>

            <ParallaxWater/>
        </Box>
    );
};

export default CrabBlock;