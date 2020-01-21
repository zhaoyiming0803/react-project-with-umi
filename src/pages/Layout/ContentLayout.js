import React from 'react'
import { Layout } from 'antd'
import AuthLayout from './AuthLayout'

const { Content } = Layout

class ContentLayout extends React.Component {
  render () {
    return (
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <AuthLayout pathname={this.props.pathname}>{this.props.children}</AuthLayout>
        </div>
      </Content>
    )
  }
}

export default ContentLayout