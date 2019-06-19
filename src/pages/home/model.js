import * as homeApi from './service';

export default {
  namespace: 'home',
  state: {
    title:'啦啦啦',
  },
  effects: {
    * load(action, {call, put,select }) {
      yield select(state=>{
        console.log("==============state================")
        console.log(state.home);
        console.log("==============action================")
        console.log(action.payload);
      })
      yield call(homeApi.homepage, {
        param1:"1",
        param2:"2"
      });
      yield put({ type: 'save',payload: {
        title: '大事'
      } });
    },
  },
  reducers: {
    save(state, { payload }) {
      return {...state, ...payload};
    },
  },
};
