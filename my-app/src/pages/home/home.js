import React from "react"
import { Redirect } from "react-router-dom";
import { getUser } from "../../infra/local-storage";
import Postit from "../../components/postit";
import {getPostitsApi} from "../../apis/postit.api"


class Home extends React.Component{
    constructor (){
        super ()
        this.state ={
            postits : [

            ]
        }
    }
    componentDidMount (){
        console.log ("hello compenentDiMount foi criado")
        this.getPostits()
    }
    componentWillUnmount (){
        console.log ("hello componentWillUnmount morreu")
    }
    getPostits = () => {
         getPostitsApi ()
            .then((response) => {
            console.log (response)
            this.setState({
                postits : response.data.todo
            })
         })
        .catch((error) => {

        })

    }
    render (){

        if(getUser()){
            return (
            <div className="home">
            {this.state.postits.map((item, index) =>(<Postit id={item.id} title={item.title} text={item.desc}/>))}
            </div>
            )
        }else{
            return <Redirect to= "/login" />
        }

    }

}



export default Home