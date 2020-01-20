import { login, getUserInfoUrl } from "../api"
import { setUserInfo, getUserInfo } from '@/utils'

export default {
  namespace: 'auth',

  state: {
    userInfo: {
      uid: '',
      token: '',
      access: []
    }
  },

  effects: {
    *login ({ payload }, { call, put }) {
      try {
        const userInfo = yield call(() => login(payload))
        yield put({ type: 'setUserInfo', payload: userInfo })
        setUserInfo(userInfo.uid, userInfo.token)
      } catch (e) {
        console.log(e)
      }
    },

    *getUserInfo ({payload}, {call, put}) {
      try {
        const userInfo = yield call(() => getUserInfoUrl(payload))
        yield put({type: 'setUserInfo', payload: {
          ...getUserInfo(),
          access: userInfo.access
        }})
      } catch (e) {
        console.log(e)
      }
    }
  },

  reducers: {
    setUserInfo (state, { payload: userInfo }) {
      return {
        ...state,
        userInfo
      }
    }
  }
}