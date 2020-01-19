import { login } from "../api"

export default {
  namespace: 'auth',

  state: {
    
  },

  effects: {
    *login ({ payload }, { call, put }) {
      const userInfo = yield call(() => login(payload));
      yield put({ type: 'resetUserInfo', payload: userInfo });
    }
  },

  reducers: {
    resetUserInfo (state, { payload: userInfo }) {
      return {
        ...state,
        userInfo
      }
    }
  }
}