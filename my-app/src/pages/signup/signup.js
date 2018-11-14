import React from "react"
import Form from "../../components/form"
import Container from "../../components/container"


class Signup extends React.Component{

    constructor(){
        super()

        this.state= { disabled: true}
        this.name = React.createRef()
        this.email = React.createRef()
        this.password = React.createRef()
        this.phone = React.createRef()

    }

    onDisableButton = () => {

        console.log("this.email =>", this.email.current)
        const InputName = this.name.current
        const inputEmail = this.email.current
        const InputPhone = this.phone.current
        const inputPassword = this.password.current

        if ( InputName.hasError () || inputEmail.hasError () || InputPhone.hasError () || inputPassword.hasError () ){
            this.setState({ disabled : true })
        }else{
            this.setState({ disabled : false })
        }

    }

    render(){

        return(

            <Container>
                <Form title="Signup" text="Cadastre-se">
                    <Form.Label htmlFor="name">Nome</Form.Label>
                    <Form.Input ref={this.name} id="name" type="text" onChange={this.onDisableButton} />
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Input ref={this.email} id="email" type="email" onChange={this.onDisableButton} required/>
                    <Form.Label htmlFor="phone">Telefone</Form.Label>
                    <Form.Input ref={this.phone} id="phone" type="tel" minLength={10} onChange={this.onDisableButton}/>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Input ref={this.password} id="password" type="password" minLength={6} onChange={this.onDisableButton} required/>
                    <Form.Button disabled={this.state.disabled}>Enviar</Form.Button > 
                    <Form.Link href="/login">Fazer login </Form.Link>
                </Form>
            </Container>
        
            )
    }

}

export default Signup