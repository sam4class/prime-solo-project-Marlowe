import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchLakeList(){
    try{
        const lakeList = yield axios.get('/api/lakes');
        console.log('incoming lakes', lakeList.data);
        yield put({ type: 'SET_LAKES', payload: lakeList.data})
    } catch(err){
        console.log('error in GET saga', err)
    }
}

function* fetchLakes(){
    yield takeEvery('FETCH_LAKES', fetchLakeList)
}

export default fetchLakes;