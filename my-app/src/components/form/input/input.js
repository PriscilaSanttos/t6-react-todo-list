import React from "react"
import "./input.css";

// function Input2exemplo(props){
//     return (
        
//         <input 

//         onChange={}
//         type={props.type}
//         id={props.id}
//         className="input"
//         placeholder={props.placeholder}

//         />
//     )
// }

class Input extends React.Component {

    constructor(props){

        super(props)
        // this.handleChange = this.handleChange.bind(this) < opção no lugar da arrow function

        this.state={ message : null }

        this.value = ""

    }

    getValue = () => {
        return this.value

    }

    hasError = () => {
        console.log(this.state.message)
        if(this.state.message === null || this.state.message !== ''){
            return true
        }else{
            return false
        }
    }

    handleChange = (e) => {

        this.value = e.target.value
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let message = ""

        if (this.props.required && this.value.trim () === ""){
            message = "Campo obrigatório"

        }else if (this.value && this.props.minLength && this.value.length < this.props.minLength){
                message = `Digite pelo menos ${this.props.minLength} caracteres`

        }else if(this.props.type==="email" && !regex.test(this.value)){
            message = "Digite um email válido"
        }
        
        this.setState ({ message : message}, this.props.onChange)
    }
    render(){
        return (

            <React.Fragment>

            <input 

            onChange={this.handleChange}
            onBlur={this.handleChange}
            type={this.props.type}
            id={this.props.id}
            className="input"
            placeholder={this.props.placeholder}
            required={this.props.required}
            
            />
            <p className="input__erro">{this.state.message}</p>

            </React.Fragment>
        )
    }

}

export default Input