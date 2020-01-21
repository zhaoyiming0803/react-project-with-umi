import ajax from '../libs/ajax'

export const getCouponList = params => {
  return ajax.request({
    url: `${API_HOST}/coupon/home`,
    params: {
      ...params,
      regionId: 1
    },
    method: 'get'
  })
}

export const getCouponClassify = () => {
  return ajax.request({
    url: `${API_HOST}/coupon/classify`,
    method: 'get'
  })
}

export const addCoupon = (data) => {
  console.log('coupon data: ', data)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 0,
        message: '添加成功'
      })
    }, 200)
  })
}