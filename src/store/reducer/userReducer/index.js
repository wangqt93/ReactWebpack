const userInfo = (state={},action) => {
    if(action.type === "getUser") {
        return action.value
    }else {
        return state
    }
}

export default userInfo