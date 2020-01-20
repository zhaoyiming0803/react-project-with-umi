import routes from '../../config/routes.config'

function normalizeRoutes (routes) {
  const result = []
  traverseAllChildren(routes, '', result)
  return result
}

function traverseAllChildren(children, prefix, result) {
  children.forEach(child => {
    if (prefix.charAt(prefix.length -1) === '/') {
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

export default normalizeRoutes(routes)
