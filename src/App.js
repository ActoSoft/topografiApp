import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'
import 'antd/dist/antd.css'
import Login from './components/authentication/login'
import Change from './components/authentication/changePassword'
import Confirm from './components/authentication/comfirmChange'
import Reset from './components/authentication/resetPassword'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class App extends Component{

    render(){
        return(
            <Fragment>
                <ToastContainer />
                <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/recuperar-contraseña/" component={Change} />
                <Route exact path="/confirmacion/" component={Confirm} />
                <Route exact path="/reset/" component={Reset} />
                </Switch>
            </Fragment>
        )
    }

}

export default App
