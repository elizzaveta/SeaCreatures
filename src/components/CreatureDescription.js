import React from 'react';
import {Box, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "../styles/Theme";
import {Parallax} from "react-scroll-parallax";

const CreatureDescription = (props) => {
    const {name, description, titleColor} = props;
    return (
        <ThemeProvider theme={theme}>
            {/*<Parallax speed={-10}>*/}
                <Box component="div"
                     style={{
                         display: "flex",
                         justifyContent: "center",
                         flexDirection: "column",
                         alignItems: 'center',
                         height: 680
                     }}>
                    <Box>
                        <Box component="div" sx={{fontWeight: "bold"}}>
                            <Typography variant="h2" color={titleColor}>
                                {name}
                            </Typography>
                        </Box>

                        <Box component="div" style={{width: '420px'}}>
                            <Typography variant="subtitle1">
                                {description}
                            </Typography>
                        </Box>

                    </Box>
                </Box>
            {/*</Parallax>*/}
        </ThemeProvider>

    );
};

export default CreatureDescription;