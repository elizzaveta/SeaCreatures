import React, {useEffect, useState} from 'react';
import {ThemeProvider} from "@material-ui/core";
import {theme} from "../styles/Theme";

const FishBlock = (props) => {
    const {child} = props;
    const [blockHeight, setBlockHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleWindowHeightChange = function () {
            setBlockHeight(window.innerHeight);
        }
        window.addEventListener('resize', () => {
            if(window.innerHeight>500){
                handleWindowHeightChange();
                console.log(window.innerHeight)
            }
        })
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <div style={{height: blockHeight}}>

                {child}
            </div>
        </ThemeProvider>
    );
};

export default FishBlock;