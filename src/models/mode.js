
export default {
  namespace: 'mode',

  state: {
    visible: false
  },
  effects: {
    
  },
  reducers: {
    show (state, action) {
      console.log( action , 123)
      return {...state, visible:action.payload }
    },
    hidden (state, action) {

    }
  }
}