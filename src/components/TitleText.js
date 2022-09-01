import React from 'react';
import {Box, Typography} from "@mui/material";
import ParallaxDoubleEllipse from "./ParallaxElements/abstract/ParallaxDoubleEllipse";
import ParallaxPinkCircle from "./ParallaxElements/abstract/ParallaxPinkCircle";

const TitleText = () => {
    return (
        <Box component="div" pt={{md: 4, lg: 6}} style={{position: 'relative'}}>

            <Box sx={{width: 585}}>
                <Typography variant="h1">
                    Crustacean
                </Typography>
                <ParallaxDoubleEllipse top={-32} left={145}/>
            </Box>

            <Typography variant="h3" style={{width: 520}}>
                A quick walkthrough into
                the world of ocean
                crustacean creatures
            </Typography>

            <ParallaxPinkCircle/>

        </Box>
    );
};

export default TitleText;