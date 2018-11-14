import React from "react"
import {Link as LinkRouter} from "react-router-dom"
import "./link.css"


function Link(props){
    return (
        
        <LinkRouter to={props.href} id={props.id} className="link" >
        {props.children}
        </LinkRouter>
    )
}

export default Link