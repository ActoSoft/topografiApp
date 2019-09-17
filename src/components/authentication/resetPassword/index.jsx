import React, { Component } from 'react'
import './index.scss'
import Icon from './../../../assets/icons/pass.png'

class Reset extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

	render() {
	    return (
	        <div className="reset-ui-container">
                <div className="reset-ui-space">
                    <div className="reset-ui-icon">
                        <img src={Icon} alt="" className="icon-reset-pass"/>
                    </div>
                    <div className="reset-ui-space-align">
                        <div className="reset-ui-form">
                            <div className="reset-ui-text">
                                <span className="reset-ui-tittle">Restablecer contraseña</span>
                            </div>
                            <span className="text-reset">Ingresa tu nueva contraseña</span>
                            <input type="password" className="input-reset" />

                            <span className="text-reset">Confirma tu nueva contraseña</span>
                            <input type="password" className="input-reset" />
                            <button className="btn-reset">Guardar contraseña</button>
                        </div>
                    </div>
                </div>
	        </div>
	    )
	}
}

export default Reset 
