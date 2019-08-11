import React, { Component } from 'react'
import './index.scss'

class ChangePassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    confirm=(e)=>{
        var page='/confirmacion';
        document.location.href=page;
      }

	render() {
	    return (
	        <div className="change-ui-container">
                <div className="change-ui-space">
                <div className="change-ui-form">
                <span className="change-ui-text">¿Olvidaste tu contraseña?</span>
                <span className="change-ui-text">No te preocupes, es posible recuperarla.</span>
                <span className="text-change">Email</span>
                <div className="change-ui-body">
                
                <input className="input-change" />
                </div>
                <button className="btn-change" onClick={this.confirm}>Recuperar contraseña</button>
                <div className="link-change">
                <a href='/'>Olvidalo, la he recordado.</a>
                </div>
                </div>
                </div>
	        </div>
	    )
	}
}

export default ChangePassword 
