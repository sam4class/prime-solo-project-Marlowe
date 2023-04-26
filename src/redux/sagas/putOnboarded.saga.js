import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects';

function* isOnboarded(action){
    console.log('action', action)
    try{
        yield axios.put(`/api/user/${action.payload}`, action.payload);
        yield put({ type: 'FETCH_USER' });
    }catch(err){
        console.log('inside PUT saga isOnboared', err)
    }
}

function* putOnboarded(){
    yield takeEvery('SET_ONBOARD', isOnboarded)
}

export default putOnboarded;