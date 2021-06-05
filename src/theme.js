import { createMuiTheme } from "@material-ui/core";


export const theme = createMuiTheme({
    palette:{
        primary:{
            main:'#049aff'
        },
        secondary:{
            main:'#ffa704'
        }
    },
    overrides:{
        MuiTypography:{
            h1:{
                fontSize:40,
                marginBottom:30
            },
            h2:{
                fontSize:32,
            }
        }
    },
    props:{}
})