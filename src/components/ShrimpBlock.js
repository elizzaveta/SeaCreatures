import React from 'react';
import twoSpots from "../images/abstractElements/twoSpots.png"
import {Container} from "@material-ui/core";
import CreatureDescription from "./CreatureDescription";
import {creatures} from "../store/CreaturesDescription";
import ParallaxShrimps from "./ParallaxElements/creatures/ParallaxShrimps";
import ParallaxBubble from "./ParallaxElements/abstract/ParallaxBubble";
import styles from "../styles/CSSmodules/ShrimpBlock.module.css"

const ShrimpBlock = () => {
    return (
        <Container className={styles.wrapper}>
            <CreatureDescription name={creatures.shrimp.name} description={creatures.shrimp.description}
                                 titleColor={"primary.dark"}/>
            <ParallaxShrimps/>

            <ParallaxBubble radius={40} top={60} left={120} speed={-4} strength={0.04}/>
            <ParallaxBubble radius={30} top={560} left={220} speed={6} strength={-0.07}/>
            <ParallaxBubble radius={40} top={150} left={1020} speed={-5} strength={-0.05}/>
            <ParallaxBubble radius={20} top={450} left={920} speed={3} strength={0.09}/>
            <img src={twoSpots}
                alt="light blue spots"
                 className={styles.bgImage}/>
        </Container>
    );
};

export default ShrimpBlock;