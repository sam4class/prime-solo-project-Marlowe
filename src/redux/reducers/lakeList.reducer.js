
const lakeList = (state=[], action) => {
    if(action.type === 'SET_LAKES') {
        return action.payload;
    }
    return state
}

export default lakeList;