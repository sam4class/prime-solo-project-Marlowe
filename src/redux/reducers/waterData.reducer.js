const waterData = (state = [], action) => {
    if(action.type === 'SET_WATER_DATA') {
        return action.payload
    }
    return state;
}
export default waterData;