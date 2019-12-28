import React from 'react'
import Link from 'umi/link'
import { Layout, Menu, Icon } from 'antd'

const { Header, Footer, Sider, Content } = Layout
const SubMenu = Menu.SubMenu

class App extends React.Component {
  render () {
    return (
      // DOM 树结构，只能有一个 root 节点
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[ '1' ]}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="pie-chart" />
                <span>Index</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>优惠券管理</span></span>}
            >
              <Menu.Item key="2"><Link to="/coupon/list">优惠券列表</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/coupon/add">添加优惠券</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App