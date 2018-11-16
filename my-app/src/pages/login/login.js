import React from "react"
import Form from "../../components/form"
import Container from "../../components/container"
import {setUser} from "../../infra/local-storage"

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
        this.email = React.createRef()
        this.password = React.createRef()
    }
    
    onDisableButton = () => {

        console.log("this.email =>", this.email.current)
        const inputEmail = this.email.current
        const inputPassword = this.password.current

        if (inputEmail.hasError () || inputPassword.hasError ()){
            this.setState({ disabled : true })
        }else{
            this.setState({ disabled : false })
        }

    }

    handleSubmit = (e) => {
        e.preventDefault()
       
        const inputEmail= this.email.current
        const inputPassword = this.password.current
        const user = {

            email : inputEmail.getValue(),
            password : inputPassword.getValue()
        }

        setUser(user)
        this.props.history.push("/")
    }

    render(){
        return(

            <Container>

            <Form title="login" text="Entre com seu email e senha" onSubmit={this.handleSubmit}>
           
             <Form.Label htmlFor="email">Email</Form.Label>
             <Form.Input ref={this.email} id="email" type="email" onChange={this.onDisableButton} required/>
             <Form.Label htmlFor="password">Password</Form.Label>
             <Form.Input ref={this.password} id="password" type="password" minLength={6} onChange={this.onDisableButton} required/>
             <Form.Button disabled={this.state.disabled}>Enviar</Form.Button > 
             <Form.Link href="/conta">Criar uma conta </Form.Link>
            
            </Form>
         
             </Container>

        )
    }

}

export default Login