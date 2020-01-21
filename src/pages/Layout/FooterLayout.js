import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

class FooterLayout extends React.Component {
  shouldComponentUpdate () {
    return false
  }
  
  render () {
    return (
      <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    )
  }
}

export default FooterLayout