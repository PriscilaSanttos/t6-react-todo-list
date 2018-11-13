import React from "react"
import Form from "../../components/form"
import Container from "../../components/container"

// function Login(){

//     return(

//    <Container >

//    <Form title="login" text="Entre com seu email e senha">
  
//     <Form.Label htmlFor="email">Email</Form.Label>
//     <Form.Input id="email" type="email" required/>
//     <Form.Label htmlFor="password">Password</Form.Label>
//     <Form.Input id="password" type="passaword" minLenght={6} required/>
//     <Form.Button disabled>Enviar</Form.Button > 
//     <Form.Link href="">Criar uma conta </Form.Link>

// </Form>

//     </Container>

//     )

// }


class Login extends React.Component{

    constructor(){

        super()

        this.state= { disabled: true}
    }
    
    onDisableButton = () => {

        console.log("Hello onDisableButton")

    }

    render(){
        return(

            <Container>

            <Form title="login" text="Entre com seu email e senha">
           
             <Form.Label htmlFor="email">Email</Form.Label>
             <Form.Input id="email" type="email" onChange={this.onDisableButton} required/>
             <Form.Label htmlFor="password">Password</Form.Label>
             <Form.Input id="password" type="password" minLenght={6} onChange={this.onDisableButton} required/>
             <Form.Button disabled={this.state.disabled}>Enviar</Form.Button > 
             <Form.Link href="">Criar uma conta </Form.Link>
            
            </Form>
         
             </Container>

        )
    }

}

export default Login