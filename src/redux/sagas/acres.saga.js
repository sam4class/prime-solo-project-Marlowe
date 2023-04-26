import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* getAcres(action){
    console.log('inside getAcres', action.data)
    try{
        const acres = yield axios.get('/api/acres')
        yield put({ type: 'SET_ACRES', payload: acres.data})
    }catch (err) {
        console.log('error inisde GET acres saga', err)
    }
}

function* fetchAcres(){
    yield takeEvery ('FETCH_ACRES', getAcres)
}

export default fetchAcres;