import React from 'react'
import './App.scss'
import axios from 'axios'
import { getEmployeesEndpoint } from './utils/endpoints'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    getEmployees = async () => {
        const employees = await axios.get(getEmployeesEndpoint)
        console.log(employees.data)
        this.setState({ employees: employees.data })
    }

    componentDidMount = () => {
        this.getEmployees()
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.employees ?
                        this.state.employees.map((employee, index)=>
                            <p key={index}>{employee.user.username}</p>
                        )
                        : <p>Loading</p>
                    }
                </header>
            </div>
        )
    }
}

export default App
