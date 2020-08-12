import React from 'react'
import {Menu} from 'antd'
import menuList from '../../config/menuConfig'
import './navLeft.css'
import {MailOutlined, AppstoreOutlined} from '@ant-design/icons'

const {SubMenu} = Menu

class NavLeft extends React.Component {

    state = {
        menuTreeNode: []
    }

    componentWillMount() {
        const menuTreeNode = this.renderMeun(menuList)
        this.setState({
            menuTreeNode
        })
    }



    renderMeun = (data) => {
        return data.map(item => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={item.title} icon={<MailOutlined/>}>
                        {this.renderMeun(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item icon={<AppstoreOutlined/>} key={item.key} title={item.title}>{item.title}</Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=''/>
                    <h1>MyBlog</h1>
                </div>
                <Menu>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default NavLeft