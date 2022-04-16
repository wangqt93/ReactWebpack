

const  numReducer = (number = 0,action) =>{
    if(action.type === 'add') {
        return  number + action.value
    }else if(action.type === 'minus') {
        return number - action.value
    }else {
        return number
    }
}

export default numReducer