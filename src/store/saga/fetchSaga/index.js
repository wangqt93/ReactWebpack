import { takeEvery,call, put } from 'redux-saga/effects';
import { gettodos } from '../../services'

export function* watchFetchTodo() {
    yield takeEvery('fetchTodos',fetchTodoApi)
}

function* fetchTodoApi() {
    try {
        yield put({type: 'fetch_request'})
        // const res = yield call(gettodos);
        // console.log(res,'todo_res')
        // yield put({type: 'fetch_success',value: res})
    } catch (error) {
        console.log(error,'error');
        yield put({type: 'fetch_error',value: error})
    }
}


// 第一步：引入redux-saga

// 第二步： takeEvery 监听一个dispatch(action),触发 fetchTodoApi

// 第三步： call一个异步操作，将返回的结果赋值个res

// 第四步： 将之前的res放入action中,调用put(actionn)

// 第五步： 进入reducer的逻辑处理，返回结果，组件通过mapStatusToProps接收