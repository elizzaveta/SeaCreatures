import {createTheme} from "@material-ui/core";


export const theme = createTheme({
    typography: {
        h1: {
            fontSize: 96
        },
        h2: {
            fontSize: 64
        },
        h3: {
            fontSize: 40
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
            main: '#B0D4DF',
            dark: '#6F96D1'
        },
        secondary: {
            main: '#EF7DB0'
        },
        custom: {
            main: '#459A8A'
        }
    },
});