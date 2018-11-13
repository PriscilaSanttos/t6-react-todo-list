import React from "react"
import Form from "../../components/form"
import Container from "../../components/container"

function Signup(){

    return(

    <Container>
        <Form title="Signup" text="Cadastre-se">
    
            <Form.Label htmlFor="name">Nome</Form.Label>
            <Form.Input id="name" type="text" />
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input id="email" type="email" required />
            <Form.Label htmlFor="phone">Telefone</Form.Label>
            <Form.Input id="phone" type="tel" />
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input id="password" type="password" minLength={6} required />
            <Form.Button disabled>Enviar</Form.Button > 
            <Form.Link href="">Fazer login </Form.Link>

        </Form>
    
    </Container>

    )

}

export default Signup