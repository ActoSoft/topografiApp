import React, { Component } from 'react'
import './index.scss'
import {Drawer, Menu, Icon} from 'antd'
const { SubMenu } = Menu;
class dashboard extends Component {
    state = { visible: false, placement: 'left' };

    handleClick = e => {
        console.log('click ', e);
    };

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
            <div className="ui-container-dashboard">
                <div className="ui-content-dashboard-header"></div>
                <div className="ui-content-dashboard-body">
                    <div className="ui-content-dashboard-tittle">
                        <div className="hamburger-menu" onClick={this.showDrawer}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <h1>TopografiApp</h1>
                    </div>
                    <div className="ui-content-dashboard-table">
                        <p>Empleados</p>
                        <table>
                            <tr className="dashboard-table-th">
                                <td>Nombre</td>
                                <td>Rol</td>
                                <td>Dirección</td>
                                <td>Teléfono</td>
                            </tr>
                            <tr className="dashboard-table-tr">
                                <td>hahvasgsgacagcs</td>
                                <td>hahvasgsgacagcs</td>
                                <td>hahvasgsgacagcs</td>
                                <td>hahvasgsgacagcs</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <Drawer
                title="Basic Drawer"
                placement={this.state.placement}
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                >
                    <Menu
                        onClick={this.handleClick}
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubMenu
                        key="sub1"
                        title={
                            <span>
                            <Icon type="mail" />
                            <span>Navigation One</span>
                            </span>
                        }
                        >
                        <Menu.ItemGroup key="g1" title="Item 1">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="Item 2">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="appstore" />
                            <span>Navigation Two</span>
                            </span>
                        }
                        >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        </SubMenu>
                        <SubMenu
                        key="sub4"
                        title={
                            <span>
                            <Icon type="setting" />
                            <span>Navigation Three</span>
                            </span>
                        }
                        >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Drawer>
            </div>
        )
    }
}

export default dashboard
