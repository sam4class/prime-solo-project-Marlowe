const favoriteLakesClicked = (state = [], action) => {
    if(action.type === 'FAV_LAKES'){
    return action.payload
} 
return state;
}