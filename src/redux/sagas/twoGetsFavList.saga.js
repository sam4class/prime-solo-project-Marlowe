import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* getFavs(){
    // console.log('inside fetchFavLakesSaga()')
    try{
        const favLakes = yield axios.get('/api/favorite');
        const lakeList = yield axios.get('api/lakes');
        
        yield put({ type: 'SET_LAKES', payload: lakeList.data})
        yield put({ type: 'SET_FAVORTIES', payload: favLakes.data});
    }catch(err) {
        console.log('inside fetchFavLake GET saga', err)
    }
}

function* twoGetsFavList(){
    yield takeEvery('FETCH_FAVORITES', getFavs)
}

export default twoGetsFavList; 