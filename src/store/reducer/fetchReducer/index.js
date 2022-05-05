const initValue = {
    isLoading: false,
    error: null,
    data: []
}

const fetchReducer = (state = initValue,action) => {
    switch(action.type) {
        case 'fetch_request':
            return {
                isLoading: true,
                error: null,
                data: []
            }
        case 'fetch_success':
            return {
                isLoading: false,
                error: null,
                data: action.value
            }
        case 'fetch_error':
            return {
                isLoading: false,
                error: action.value,
                data: []
            }
        default: return state;
    }
}
export default fetchReducer