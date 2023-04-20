const favoriteLakesClicked = (state = [], action) => {
    console.log('inside favlakClicked', action.payload)
    if(action.type === 'FAV_LAKES'){
    return action.payload
} 
return state;
}