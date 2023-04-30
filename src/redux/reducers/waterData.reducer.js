const waterData = (state = [], action) => {
    switch (action.type) {
        case 'SET_WATER_DATA':
            console.log('HERE in reducer', action.payload)
            return action.payload;
        default:
            return state;
    }
}
export default waterData;