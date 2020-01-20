import React from 'react'
import Link from 'umi/link'
import { Menu, Icon } from 'antd'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

class MenuLayout extends React.Component {
  constructor (props) {
    super(props)
  }

  shouldComponentUpdate (props) {
    return false
  }

  render () {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[ this.props.defaultSelectedKeys ]}>
        {this.props.routes.slice(0, -1).map(route => this.resolveMenu(route))}
      </Menu>
    )
  }

  resolveMenu (menu) {
    if (!Array.isArray(menu.routes) || menu.routes.length === 0) {
      return (
        <MenuItem key={menu.path}>
          <Link to={menu.path}>
            <Icon type="pie-chart" />
            <span>{menu.meta && menu.meta.title}</span>
          </Link>
        </MenuItem>
      )
    }

    return (
      <SubMenu
        key={menu.path}
        title={<span><Icon type="dashboard" /><span>{menu.meta && menu.meta.title}</span></span>}
      >
        {menu.routes.filter(item => !item.meta || !item.meta.hidden).slice(0, -1).map(subMenu => this.resolveMenu(subMenu))}
      </SubMenu>
    )
  }
}

export default MenuLayout