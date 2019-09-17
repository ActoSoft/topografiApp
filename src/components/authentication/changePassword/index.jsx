import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import Icon from './../../../assets/icons/question.png'

class ChangePassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    confirm=(e)=>{
        var page='/message';
        document.location.href=page;
      }

	render() {
	    return (
	        <div className="change-ui-container">
                <div className="change-ui-space animated bounceInLeft">
                    <div className="change-ui-image">
                        <img src={Icon} alt="" className="icon-change-pass"/>
                    </div>
                    <div className="change-ui-space-align">
                        <div className="change-ui-form">
                            <span className="change-ui-text">¿Olvidaste tu contraseña?</span>
                            <span className="change-ui-text">No te preocupes, es posible recuperarla.</span>
                            <span className="text-change">Email</span>

                            <div className="change-ui-body">
                                <input className="input-change" />
                            </div>

                            <button className="btn-change" onClick={this.confirm}>Recuperar contraseña</button>

                            <div className="link-change">
                                <Link to='/login'>Olvidalo, la he recordado.</Link>
                            </div>
                        </div>
                    </div>
                </div>
	        </div>
	    )
	}
}

export default ChangePassword 
