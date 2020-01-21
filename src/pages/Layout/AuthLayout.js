import React from 'react'
import { message, Spin } from 'antd'
import { connect } from 'dva'
import routes from '../../../config/routes.config'
import { getUserInfo } from '@/utils'
import { router } from 'umi'

const namespace = 'auth'
const mapStateToProps = state => ({
  userInfo: state[ namespace ].userInfo
})

@connect(mapStateToProps)
class AuthLayout extends React.Component {
  constructor (props) {
    super(props)
    this.validateIdetify()
  }

  validateIdetify () {
    const { Uid, Token } = getUserInfo()
    if (!Uid || !Token) {
      return router.replace('/login')
    }
    this.props.dispatch({
      type: `${ namespace }/getUserInfo`,
      payload: Token
    })
  }

  render () {
    console.log('props: ', this)
    console.log('access: ', this.props.userInfo.access)
    console.log('pathname: ', this.props.pathname)

    const access = this.props.userInfo.access

    if (!Array.isArray(access) || !access.length) {
      return <Spin size="large"></Spin>
    }

    const route = normalizeRoutes(routes).find(route => route.path === this.props.pathname)

    if (!route) {
      return <div>404</div>
    }

    if (!route.meta || access.includes(route.meta.access)) {
      return <React.Fragment>{this.props.children}</React.Fragment>
    }

    return <div>没有权限</div>
  }
}

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

export default AuthLayout