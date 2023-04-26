const acresValue = (state={}, action) => {
    if (action.type === 'SET_ACRES') {
        return action.payload
    }
    return state
}

export default acresValue;