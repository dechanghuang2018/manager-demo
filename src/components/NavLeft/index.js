import React from 'react'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'

import MenuConfig from './../../config/menuConfig'
import { red } from 'ansi-colors';
import './index.less'
import { from } from 'rxjs';

const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key} ><NavLink to={item.key}>{item.title}</NavLink></Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>HDC MS</h1>
                    <Menu theme="dark">
                        {this.state.menuTreeNode}
                    </Menu>
                </div>
            </div>
        );
    }
}