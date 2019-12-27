import ajax from '../libs/ajax'

export default {
  namespace: 'business',

  state: {
    cardList: [
      {
        id: 11,
        setup: 'setup11',
        punchline: 'punchline11'
      },
      {
        id: 22,
        setup: 'setup22',
        punchline: 'punchline22'
      }
    ]
  },

  effects: {
    *getCardList (_, { call, put }) {
      const endPointURI = 'https://api.0351zhuangxiu.com/tour/article/cardlist';

      const result = yield call(ajax, endPointURI /* url */, { a: 1, b: 2 } /** options */);
      yield put({ type: 'addNewCard', payload: result.data });
    }
  },

  reducers: {
    addNewCard (state, { payload: newCard }) {
      return {
        ...state,
        cardList: state.cardList.concat(newCard)
      }
    }
  }
}