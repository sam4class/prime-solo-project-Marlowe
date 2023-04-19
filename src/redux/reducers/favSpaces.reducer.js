const favSpaces = (state = [], action) => {
    if (action.type === 'SET_FAV_SPACES') {
        return action.payload;
    }
    return state
}

export default favSpaces;