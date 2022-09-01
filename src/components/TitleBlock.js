import React from 'react';
import {Grid, ThemeProvider} from "@mui/material";
import {Container, Typography} from "@material-ui/core"
import {theme} from "../styles/Theme";
import TitleText from "./TitleText";
import TitleImage from "./TitleImage";


const TitleBlock = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container style={{position:"relative", height:750}}>
                <Grid container
                      columns={{md: 6, lg: 12, sm:6}}
                      spacing={{sm: 5, md: 6, lg:5}}
                      height={"100%"}
                      alignItems={"center"}>

                    <Grid item xs={6} textAlign={{lg: 'right', md: "center", sm: "center"}}>
                        <TitleImage/>
                    </Grid>

                    <Grid item xs={6} sx={{display: "flex"}} justifyContent={{lg: "left", md: "center", sm: "center"}}>
                        <TitleText/>
                    </Grid>

                </Grid>
                <Typography style={{position:"absolute", bottom:30, color:'lightslategray', opacity:0.5, textAlign:'center', width:"100%"}} variant="subtitle2">Hint: try to move your mouse</Typography>
            </Container>
        </ThemeProvider>
    );
};

export default TitleBlock;