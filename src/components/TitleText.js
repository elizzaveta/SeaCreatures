import React from 'react';
import {Box, Typography} from "@mui/material";
import ParallaxDoubleEllipse from "./ParallaxElements/abstract/ParallaxDoubleEllipse";
import ParallaxPinkCircle from "./ParallaxElements/abstract/ParallaxPinkCircle";

const TitleText = () => {
    return (
        <Box component="div" pt={{lg: 6, xs:3}}
             style={{position: 'relative', display: 'flex', flexDirection:"column", height: "inherit", width: "inherit"}}
            justifyContent={{sm:"center", xs:"center"}}>

            <Box>
                <Typography variant="h1">
                    Crustacean
                </Typography>
            </Box>

            <Typography variant="h3">
                A quick walkthrough into
                the world of ocean
                crustacean creatures
            </Typography>

            <Box visibility={{lg:"visible", md: "visible",sm:"hidden", xs:"hidden"}}>
                <ParallaxDoubleEllipse top={-32} right={0}/>
                <ParallaxPinkCircle/>
            </Box>

        </Box>
    );
};

export default TitleText;