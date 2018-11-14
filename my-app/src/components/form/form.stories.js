import React from "react"
import {storiesOf} from "@storybook/react"
import Form from "./index"
import Label from "./label"
import Input from "./input"

storiesOf("Components/Form", module)

    .add("default", () =>(
        <Form>
            
            <Label for="teste">Digite qualquer coisa </Label>
            <Input name="teste" type="text" placeholder="Digite qualquer coisa" /> 

        </Form>
    ))