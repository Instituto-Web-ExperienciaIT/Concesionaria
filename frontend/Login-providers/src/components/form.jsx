import { Box, Button, Grid } from "@mui/material"
import { Input, InputSelect } from "./input"
import React from "react"

export const Form = () => {

    const [loginData, setLoginData] = React.useState({
        name:"",
        item:"services",
        username:"",
        key:"",
        adress:"",
    })

    const handleChange = (event) =>{
        
        setLoginData({ ...loginData, [event.target.name]:event.target.value  }), console.log(loginData)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(loginData)
    }


    return(
        <>
        <Box
        component="form"
        autoComplete="off"
        maxWidth="xl"
        style={{ boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12", alignItems:"center",justifyContent:"center", textAlign:"center"}}>

            <Grid container flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                <Input id="name" label="Nombre y apellido:" type="text" changeProp={handleChange}/>
                <Input id="adress" label="Domicilio:" type="text" changeProp={handleChange}/>
                <InputSelect changeProp={handleChange}/>
                <Input id="username" label="Usuario:" type="text" changeProp={handleChange}/>
                <Input id="key" label="Clave:" type="password" changeProp={handleChange}/>
            </Grid>
            <Button type="submit" variant="contained" color="secondary" sx={{marginBottom:"30px", marginTop:"30px", padding:"10px 20px", width:"150px"}} onClick={handleSubmit}>
                Ingresar
            </Button>
            
        </Box>
        </>
    )
}