import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"





const Theme = createTheme({
    palette:{
        mode:"light",
        background:{
            default:"#F6F1F1"
        },
        primary:{
            main:"#AFD3E2"
        },
        secondary:{
            main:"#19A7CE"
        },
        
    },
    typography:{
        fontFamily:"Arial",
        fontSize:13
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform:"none",
                    boxShadow:"none",
                    borderRadius:"1.5em",

                },
            }
        },
    }
})


export const ThemeConfig = ({children}) =>{
    return(

        <ThemeProvider theme={Theme}>
    <CssBaseline/>
    {children}
    </ThemeProvider>
        )
}