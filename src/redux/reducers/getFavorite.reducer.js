const favLakeList = (state = [], action) => {
    if (action.type === 'SET_FAVORTIES') {
        return action.payload;
    }
    return state;
}
export default favLakeList;