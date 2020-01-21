import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

class HeaderLayout extends React.Component {
  shouldComponentUpdate () {
    return false
  }
  
  render () {
    return (
      <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
    )
  }
}

export default HeaderLayout