import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* favLakesNumbers(action){
    try{
        yield axios.put(`/api/lakes/${action.payload.id}`, action.payload)
        yield put({type: 'FETCH_LAKES'})
    }catch (err) {
        console.log('error in saga favLakesNumbers', err)
    }
}

function* favoriteLakes(){
    yield takeEvery("FAV_LAKES", favLakesNumbers)
    }

    export default favoriteLakes;