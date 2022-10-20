import React from 'react';
import {Grid, ThemeProvider} from "@mui/material";
import {Container, Typography} from "@material-ui/core"
import {theme} from "../styles/Theme";
import TitleText from "./TitleText";
import TitleImage from "./TitleImage";
import styles from "../styles/CSSmodules/TitleBlock.module.css"


const TitleBlock = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container className={styles.wrapper}>
                <Grid container
                      columns={{md: 2, lg: 2, sm: 1, xs: 1}}
                      spacing={{lg: 5, md: 5, sm: 0, xs: 0}}
                      height={window.innerHeight}
                      className={styles.gridContainer}
                >

                    <Grid item lg={1} md={1} sm={1} xs={1} sx={{display: "flex"}}
                          justifyContent={{lg: 'right', md: "right", sm: "center", xs:"center"}}
                          alignItems="center"
                          height={{lg:532, md:400, sm:400, xs:400}}
                          width={{lg:525, md:395, sm:395, xs:395}}
                    >
                        <TitleImage/>
                    </Grid>

                    <Grid item lg={1} md={1} sm={1} xs={1} sx={{display: "flex"}}
                          justifyContent={{lg: "left", md: "left", sm: "center", xs:"center"}}
                          alignItems="center"
                          height={{lg:450, md:320, sm:200, xs:200}}
                          width={{lg:525, md:395, sm:395, xs:395}}
                    >
                        <TitleText/>
                    </Grid>

                </Grid>
                <Typography className={styles.hint} variant="subtitle2">Hint: try to move your mouse</Typography>
            </Container>
        </ThemeProvider>
    );
};

export default TitleBlock;