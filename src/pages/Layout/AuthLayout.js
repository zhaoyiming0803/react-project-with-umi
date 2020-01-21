import React from 'react'
import { message } from 'antd'
import routes from '../../../config/routes.config'

function normalizeRoutes (routes) {
  const result = []
  traverseAllChildren(routes, '', result)
  return result
}

function traverseAllChildren (children, prefix, result) {
  children.forEach(child => {
    if (prefix.charAt(prefix.length - 1) === '/') {
      prefix = prefix.slice(0, -1)
    }
    if (child.path.charAt(0) === '/') {
      child.path = child.path.slice(1)
    }
    const _path = prefix + '/' + child.path
    if (!Array.isArray(child.routes)) {
      result.push({
        path: _path,
        meta: child.meta
      })
    } else {
      traverseAllChildren(child.routes, _path, result)
    }
  })
}

class AuthLayout extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log('props: ', this)
    console.log('access: ', this.props.access)
    console.log('pathname: ', this.props.pathname)

    const route = normalizeRoutes(routes).find(route => route.path === this.props.pathname)

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