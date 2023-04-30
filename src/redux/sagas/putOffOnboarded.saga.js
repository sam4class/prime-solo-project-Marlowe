import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects';

function* isOffboarded(action) {
    // console.log('action', action)
    try {
        yield axios.put(`/api/user/more/${action.payload}`, action.payload);
        yield put({ type: 'FETCH_USER' });
    } catch (err) {
        console.log('inside PUT saga isOnboared', err)
    }
}

function* putOffboarded() {
    yield takeEvery('SET_ONBOARD_OFF', isOffboarded)
}

export default putOffboarded;