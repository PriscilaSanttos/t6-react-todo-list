import React, { Component } from 'react'
import {Route, Switch } from "react-router-dom"
import {withRouter} from "react-router"
import Login from "./pages/login"
import Signup from "./pages/signup/signup"
import Home from "./pages/home"
import Navbar from "./components/navbar"
import pageNotFound from './pages/pageNotFound/pageNotFound';
import { startServer } from "./infra/api-config"


class App extends Component {
  render() {
    startServer()
    return (

      <React.Fragment>
      
      <Navbar />
      <Switch>
      <Route exact path="/"component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/conta" component={Signup} />
      <Route component= {pageNotFound}/>
      </Switch>

      </React.Fragment>
    );
  }
}

export default withRouter(App);
