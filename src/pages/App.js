import React from 'react'
import { Layout, message } from 'antd'
import { systemName } from '../../config/system.config'
import MenuLayout from './Layout/MenuLayout'
import AuthLayout from './Layout/AuthLayout'
import { getUserInfo } from '@/utils'
import { connect } from 'dva'

const namespace = 'auth'
const mapStateToProps = state => ({
  userInfo: state[ namespace ].userInfo
})
const { Header, Footer, Sider, Content } = Layout

@connect(mapStateToProps)
class App extends React.Component {
  constructor (props) {
    super(props)
    this.validateIdetify()
  }

  validateIdetify () {
    const { Uid, Token } = getUserInfo()
    if (!Uid || !Token) {
      return this.props.history.replace('/login')
    }
    this.props.dispatch({
      type: `${ namespace }/getUserInfo`,
      payload: Token
    })
  }

  render () {
    document.title = systemName
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <div style={{ height: '32px', color: '#fff', textAlign: 'center', margin: '16px' }}>
            {systemName}
          </div>
          <MenuLayout routes={this.props.route.routes} defaultSelectedKeys={this.props.location.pathname}></MenuLayout>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <AuthLayout access={this.props.userInfo.access} pathname={this.props.location.pathname}>{this.props.children}</AuthLayout>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App