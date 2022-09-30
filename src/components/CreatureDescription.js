import React from 'react';
import {Box, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "../styles/Theme";

const CreatureDescription = (props) => {
    const {name, description, titleColor} = props;

    return (
        <ThemeProvider theme={theme}>
                <Box component="div"
                     style={{
                         display: "flex",
                         justifyContent: "center",
                         flexDirection: "column",
                         alignItems: 'center',
                         height: "100%"
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
        </ThemeProvider>

    );
};

export default CreatureDescription;