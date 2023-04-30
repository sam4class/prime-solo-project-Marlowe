import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects';

//this function is not is use at the moment
function* deleteLake(action) {
    // console.log('inside delete saga', action.payload)
    try {
        yield axios.delete(`/api/favorite/${action.payload}`)
        yield put({ type: 'FETCH_FAVORITES' })
    } catch (err) {
        console.log('inside delete saga', err)
    }
}

function* deleteFavLake() {
    yield takeEvery('DELETE_FAV', deleteLake)
}

export default deleteFavLake;