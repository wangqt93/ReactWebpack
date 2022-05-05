import { delay,put,takeEvery } from 'redux-saga/effects'


function* fn_delay() {
    yield put({type:'add',value:3})

}

export  function* watchSagay() {
   yield takeEvery('sagay',fn_delay)
}