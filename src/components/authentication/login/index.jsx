import React, { Component } from 'react'
import './index.scss'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

	render() {
	    return (
	        <div className="login-ui-container">
                <div className="login-ui-space">
                <div className="login-ui-form">
                <span className="text-login">Email</span>
                <input className="input-login" />

                <span className="text-login">Contraseña</span>
                <input type="password" className="input-login" />
                <button className="btn-login">Iniciar sesión</button>
                <div className="link-login">
                <a href='/recuperar-contraseña'>¿Olvidaste tu contraseña?</a>
                </div>
                </div>
                </div>
	        </div>
	    )
	}
}

export default Login 
