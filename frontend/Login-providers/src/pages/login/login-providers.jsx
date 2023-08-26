import Container from '@mui/material/Container'
import { Navbar } from '../../components/navbar'
import { Form } from '../../components/form'

export const LoginProviders = () =>{
    return(
        <>
        <Container maxWidth="xl" style={{margin:"10pt"}}>
        <Navbar title={"Alta de proveedores"}/>
        <Form/>
        </Container>
        </>
    )
}