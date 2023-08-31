import { CreateMUIStyled, createTheme } from "@mui/material";
import {  amber } from "@mui/material/colors";


const theme = createTheme({
    palette:{
        primary:{
            main: "#000"
        },
        secondary:{
            main:amber[500],
        }
    }
});

export default theme;