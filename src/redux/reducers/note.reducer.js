const userNotes = (state=[], action) => {
    console.log('inside userNotes reducer', action.payload)
    if(action.type === 'SET_NOTES') {
        return action.payload;
    }
    return state;
}

export default userNotes;