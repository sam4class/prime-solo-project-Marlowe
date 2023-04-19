import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchFavSpaces(){
    try{
    const favSpace = yield axios.get('/api/favorites')
        yield put({type: 'SET_FAV_SPACES', payload: favSpace.data})
    }catch (err) {
        console.log('error in fetchFavSpaces saga')
    }
}

function* favSpaces(){
    yield takeEvery('FETCH_FAV_SPACES', fetchFavSpaces)
}

export default favSpaces;