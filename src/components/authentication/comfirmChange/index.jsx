import React, { Component } from 'react'
import './index.scss'
class Confirm extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

	render() {
	    return (
	        <div className="confirm-ui-container">
                <div className="confirm-ui-space">
                <div className="confirm-ui-form">
                <span className="confirm-ui-text">Se ha enviado un email con las instrucciones para
                restablecer tu contraseña.</span>
                </div>
                </div>
	        </div>
	    )
	}
}

export default Confirm 
