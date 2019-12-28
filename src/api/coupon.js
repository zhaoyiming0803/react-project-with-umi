import ajax from '../libs/ajax'

export const getCouponList = params => {
  return ajax.request({
    url: `https://api.0351zhuangxiu.com/tour/coupon/home`,
    params: {
      ...params,
      regionId: 1
    },
    method: 'get'
  })
}

export const getCouponClassify = () => {
  return ajax.request({
    url: 'https://api.0351zhuangxiu.com/tour/coupon/classify',
    method: 'get'
  })
}