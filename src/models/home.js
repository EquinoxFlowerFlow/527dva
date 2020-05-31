import { List, Add, Delet, Update} from '@/services/home'

export default {
  namespace: 'home',

  state: {
    data: [],
    obj: {},
    id: '',
    status: '',
  },
  effects: {
    *getList ({payload}, {call, put, select}) {
      const list = yield call(List)

      yield put({
        type: 'list',
        payload: list.users,
      })
    },
    *getAdd ({payload}, {call, put, select}) {
      const add = yield call(Add, payload)

      yield put({
        type: 'getList'
      })
    },
    *getDele ({payload}, {call, put, select}) {
      const del = yield call(Delet,payload)

      yield put({
        type: 'getList'
      })
    },
    *getUpd ({payload}, {call, put, select}) {
      const update = yield call(Update,payload)
      
      yield put({
        type: 'getList'
      })
    },
  },
  reducers: {
    list (state, action) {
      return {...state, data:action.payload}
    },
  }
}