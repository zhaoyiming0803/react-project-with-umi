import React from 'react'
import { Layout, message } from 'antd'
import SiderLayout from './layout/SiderLayout'
import HeaderLayout from './layout/HeaderLayout'
import FooterLayout from './layout/FooterLayout'
import ContentLayout from './layout/ContentLayout'
import { connect } from 'dva'

class App extends React.Component {
  render () {
    return (
      <Layout>
        <SiderLayout routes={this.props.route.routes} defaultSelectedKeys={this.props.location.pathname}></SiderLayout>
        <Layout>
          <HeaderLayout></HeaderLayout>
          <ContentLayout pathname={this.props.location.pathname} children={this.props.children}></ContentLayout>
          <FooterLayout></FooterLayout>
        </Layout>
      </Layout>
    )
  }
}

export default App