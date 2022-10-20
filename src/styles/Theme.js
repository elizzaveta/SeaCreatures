import {createTheme} from "@material-ui/core";


export const theme = createTheme({
    typography: {
        h1: {
            fontSize: "7vw"
        },
        h2: {
            fontSize:"5vw"
        },
        h3: {
            '@media (min-width:1280px)': {
                fontSize: '40px',
            },
            '@media (max-width:1280px)': {
                fontSize: '24px',
            },
            '@media (max-width:960px)': {
                fontSize: '20px',
            }
        },
        subtitle1:{
            fontSize: 16
        },
        fontFamily:[
            'Raleway'
        ]
    },
    palette: {
        primary: {
            main: '#6F96D1'
        },
        secondary: {
            main: '#EF7DB0'
        },
        custom: {
            main: '#459A8A'
        }
    },
});