import React, { Component } from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import Icon from './../../../assets/icons/user.png'
import { withAuth } from '../../../Authentication'
import { Modal, Button } from 'antd'
import '../../../animate.css'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            visible: false
        }
        this.login = this.props.auth.handleLogin
    }
    
  onChangeForm = (e) => {
	    const { name, value } = e.target
	    this.setState(prevState => {
	        const newState = { ...prevState }
	        newState[name] = value
	        return newState
	    })
	}

	onLogin = async () => {
	    if (await this.login(this.state)) {
	        this.props.history.push('/dashboard/')
	    }
	}
/*
    handleOk = e => {
        console.log("Se aceptó la soli");
        this.setState({
          visible: false,
        });
      };
    animated bounceInLeft
      handleCancel = e => {
        console.log("Bateado :(");
        this.setState({
          visible: false,
        });
      };
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
*/

  render() {
	    return (
	      <div className="login-ui-container">
          <div className="login-ui-space animated bounceInLeft">
            <div className="login-ui-image">
              <img src={Icon} alt="" className="icon-login"/>
            </div>
            <div className="login-ui-space-align">
              <div className="login-ui-form">
                <span className="text-login">Email</span>
                <input className="input-login" onChange={this.onChangeForm} />

                <span className="text-login">Contraseña</span>
                <input type="password" className="input-login" onChange={this.onChangeForm}/>

                <button className="btn-login"  onClick={this.onLogin}>Iniciar sesión</button>
                <div className="link-login">
                <Link to='/recuperar-contraseña'>¿Olvidaste tu contraseña?</Link>
                </div>
              </div>
            </div>
          </div>
                <Modal
                className="iu-modal"
                title="Título"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                visible={this.state.visible}
                footer={[
                    <Button key="Aceptar" onClick={this.handleOk}>
                      Aceptar
                    </Button>,
                    <Button key="Cancelar" type="primary" onClick={this.handleCancel}>
                      Cancelar
                    </Button>,
                  ]}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                </Modal>    
	        </div>
	    )
	}
}

export default withAuth(Login)
