import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchFavLakesSaga() {
    // console.log('inside fetchFavLakesSaga()')
    try {
        const favLakes = yield axios.get('/api/favorite');
        yield put({ type: 'SET_FAVORTIES', payload: favLakes.data });
    } catch (err) {
        console.log('inside fetchFavLake GET saga', err)
    }
}

function* fetchFavLakes() {
    yield takeEvery('FETCH_FAVORITES', fetchFavLakesSaga)
}

export default fetchFavLakes; 