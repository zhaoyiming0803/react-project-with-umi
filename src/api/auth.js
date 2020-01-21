import ajax from '../libs/ajax'

export const login = data => {
  return ajax.request({
    url: `${API_HOST}/auth/login`,
    data,
    method: 'post'
  })
}

export const getUserInfoUrl = token => {
  return ajax.request({
    url: `${API_HOST}/auth/getUserInfo`,
    params: { token },
    method: 'get'
  })
}