import { call,takeEvery } from 'redux-saga/effects';
import { getUser,gettodos } from '../../services';

export function* watchSagax() {
    yield takeEvery('sagax',fetchUser)
}

function* fetchUser() {
    // console.log('first')
  const res =   yield call(getUser)
    // console.log(res);
}

function * fetchTodos() {
  const res = yield call(gettodos)
}

export function* watchTodos() {
  yield takeEvery('todes',fetchTodos)
}

