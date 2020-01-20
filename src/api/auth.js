import ajax from '../libs/ajax'

export const login = data => {
  return ajax.request({
    url: `/login`,
    data,
    method: 'post'
  })
}

export const getUserInfoUrl = token => {
  return ajax.request({
    url: '/user/info',
    params: { token },
    method: 'get'
  })
}