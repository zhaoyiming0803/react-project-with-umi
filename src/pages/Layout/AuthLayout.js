import React from 'react'
import { message } from 'antd'
import normalizedRoutes from '@/utils/normalizeRoutes'

class AuthLayout extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log('props: ', this)
    console.log('access: ', this.props.access)
    console.log('pathname: ', this.props.pathname)

    const route = normalizedRoutes.find(route => route.path === this.props.pathname)

    if (!route) {
      return <div>404</div>
    }

    if (
      !route.meta ||
      this.props.access.includes(route.meta.access) && !route.meta.hidden
    ) {
      return <React.Fragment>{this.props.children}</React.Fragment>
    }

    return <div>没有权限</div>
  }
}

export default AuthLayout