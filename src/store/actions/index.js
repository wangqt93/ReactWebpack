
import { getUser } from '../services'

// action 是一个对象
const add = value => ({ type:'add',value })

const minus = value => ({type: 'minus',value})

// 异步操作：action是一个函数，是将dispatch作为参数的回调函数
const asyncAdd = value => {
    return next => {
        setTimeout( () => {
            next({type:'add',value})
        },2000)
    }
}

const asyncMinus = value => {
    return dispatch => {
        setTimeout( () => {
            dispatch({type:'minus',value})
        },2000)

    }
}
const getUseracion = (value) => {
    return {type: 'getUser',value}
}

const getUserApi = () => {
    console.log(124)
    return dispatch => {
        getUser().then(res => {
            dispatch(getUseracion(res.results[0]))
        })
    }
}
const sagax = () => {
    return {type: 'sagax'}
}

const sagay = () => {
    return {type: 'sagay'}
}
const todes = () => {
    return {type:'fetchTodos'}
}


export { add,minus,asyncAdd,asyncMinus,getUserApi,sagax,sagay,todes };