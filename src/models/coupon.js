import { getCouponList, getCouponClassify, addCoupon } from "@/api"

export default {
  namespace: 'coupon',

  state: {
    couponList: [],
    classify: []
  },

  effects: {
    *getCouponList ({ payload }, { call, put }) {
      const couponList = yield call(() => {
        return getCouponList(payload)
      });
      yield put({ type: 'resetCouponList', payload: couponList });
    },

    *getCouponClassify ({ payload }, { call, put }) {
      const classify = yield call(getCouponClassify)
      yield put({ type: 'resetClassify', payload: classify })
    },

    *addCoupon ({ payload }, { call, put }) {
      const result = yield call(() => {
        return addCoupon(payload)
      })
      console.log(result)
    }
  },

  reducers: {
    resetCouponList (state, { payload: couponList }) {
      return {
        ...state,
        couponList
      }
    },

    resetClassify (state, { payload: classify }) {
      return {
        ...state,
        classify
      }
    }
  }
}