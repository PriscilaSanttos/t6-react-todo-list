import React from "react"
import { Redirect } from "react-router-dom";
import { getUser } from "../../infra/local-storage";

class Home extends React.Component{
    constructor (){
        super ()

    }
    componentDidMount (){
        console.log ("hello compenentDiMount foi criado")
    }
    componentWillUnmount (){
        console.log ("hello componentWillUnmount morreu")
    }
    render (){

        if(getUser()){
            return <div>Hello Home</div>
        }else{
            return <Redirect to= "/login" />
        }

    }

}



export default Home