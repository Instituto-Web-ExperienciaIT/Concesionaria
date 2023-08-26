import { Grid, MenuItem } from '@mui/material'
import TextField from '@mui/material/TextField'
import React from 'react'




export const Input = ({id, type, label, changeProp}) =>{

    return(
        <>
        <Grid item style={{marginTop:"30px"}} maxHeight="500px" alignItems="center" justifyContent="center">
            {label}
        <TextField
          id={id}
          name={id}
          type={type}
          onChange={changeProp}
          variant="outlined"
          size='small'
            required
          sx={{
              marginLeft:"3%",
              width:"55%",
            "& .MuiInputBase-input":{
                height:"10px",
            }
          }}
          />
          </Grid>
        </>
    )
}

export const InputSelect = ({changeProp}) =>{

    const options = [
        {
            value:"services",
            label:"Servicios",
        },
        {
            value:"products",
            label:"Productos"
        }
    ]

    return(
        <>
        <Grid item style={{marginTop:"30px"}} textAlign="center" alignItems="center" >
            Rubro:
        <TextField
          id="item"
          name="item"
          select
          defaultValue="services"
          size='small'
          onChange={changeProp}
          sx={{
            marginLeft:"10px",
        "& .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{
            height:"1px",
            width:"120px",
            padding:"4px"
        }
      }}
          >
            {
                options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))
            }
        </TextField>
            </Grid>
        </>
    )
}
