import { all } from 'redux-saga/effects'
import { watchSagax,watchTodos } from './userSaga';
import { watchSagay } from './numberSaga';
import { watchFetchTodo } from './fetchSaga'

export default function* rootSagaWtach() {
    yield all([watchSagax(),watchSagay(),watchTodos(),watchFetchTodo()])
}
