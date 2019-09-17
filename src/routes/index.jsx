import React, { Fragment } from 'react'
import { Switch } from 'react-router-dom'
import Login from './../components/authentication/login'
import ChangePassword from './../components/authentication/changePassword'
import Confirm from './../components/authentication/comfirmChange'
import ResetPassword from './../components/authentication/resetPassword'
import Dashboard from './../components/dashboard'
import PrivateRoute from './privateRoute'
import PublicRoute from './publicRoute'

const Routes = () => {
    return (
        <Fragment>
            <Switch>

                {/* Public Routes */}
                <PublicRoute exact path = "/login/" component = { Login } />
                <PublicRoute exact path = "/recuperar-contraseña/" component = { ChangePassword } />
                <PublicRoute exact path = "/restaurar-contrasena/:token/" component = { ResetPassword } />

                {/* Private Routes */}
                <PublicRoute exact path = '/message/' component = { Confirm } />
                <PrivateRoute exact path = '/dashboard/' component = { Dashboard } />

            </Switch>
        </Fragment>
    )
}
export default Routes