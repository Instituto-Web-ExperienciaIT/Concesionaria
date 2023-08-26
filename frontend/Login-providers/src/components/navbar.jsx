import { AppBar } from "@mui/material"


export const Navbar = ({title}) =>{
    return(

        <AppBar position="static" color="primary">
    <h1>{title}</h1>
        </AppBar>
        )
}