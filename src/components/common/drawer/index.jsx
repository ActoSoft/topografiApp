import React, { Component } from 'react'
import {Drawer} from 'antd'
class Drawer extends Component {
    state = { visible: false, placement: 'top' };

    showDrawer = () => {
        this.setState({
        visible: true,
        });
    };

    onClose = () => {
        this.setState({
        visible: false,
        });
    };
    render() {
        return (
            <div>
                <Drawer
                title="Basic Drawer"
                placement={this.state.placement}
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                </Drawer>
            </div>
        )
    }
}

export default Drawer
