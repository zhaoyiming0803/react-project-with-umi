import ajax from '../libs/ajax'

export const login = data => {
  return ajax.request({
    url: `/login`,
    data,
    method: 'post'
  })
}
