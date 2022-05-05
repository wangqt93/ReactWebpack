import { createStore,applyMiddleware,combineReducers } from 'redux';
import { numReducer,userInfo,fetchReducer } from './reducer/index';
// import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware';
import creatSageMiddleware from 'redux-saga';
import rootSagaWtach from './saga'

const sagaMiddleware = creatSageMiddleware()

// logger:自定义中间件
// const logger = store => next => action => {
//     console.log('dispatching', action);
//     let result = next(action);
//     console.log('next state', store.getState());
//     return result;
// };
// error:自定义中间件
// const error = store => next => action => {
//     try {
//         next(action)
//     } catch(e) {
//         console.log('error ' + e);
//     }
// };

const store = createStore(combineReducers({numReducer,userInfo,fetchReducer}),applyMiddleware(thunk,promise,sagaMiddleware));
sagaMiddleware.run(rootSagaWtach)
export default store;