import React from 'react'
import Link from 'umi/link'
import { Menu, Icon, Layout } from 'antd'
import { systemName } from '../../../config/system.config'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
const { Sider } = Layout

class MenuLayout extends React.Component {
  constructor (props) {
    super(props)
  }

  shouldComponentUpdate (props) {
    return false
  }

  render () {
    return (
      <Sider width={256} style={{ minHeight: '100vh' }}>
        <div style={{ height: '32px', color: '#fff', textAlign: 'center', margin: '16px' }}>
          {systemName}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[ this.props.defaultSelectedKeys ]}>
          {filterRoute(this.props.routes).map(route => this.resolveMenu(route))}
        </Menu>
      </Sider>
    )
  }

  resolveMenu (menu) {
    if (!Array.isArray(menu.routes)) {
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
        {filterRoute(menu.routes).map(subMenu => this.resolveMenu(subMenu))}
      </SubMenu>
    )
  }
}

function filterRoute (routes) {
  return routes.filter(route => route.path && (!route.meta || !route.meta.hidden))
}

export default MenuLayout