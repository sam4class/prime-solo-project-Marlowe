const waterData = (state = [], action) => {
    switch (action.type) {
        case 'SET_WATER_DATA':
            return action.payload;
        default:
            return state;
    }
}
export default waterData;