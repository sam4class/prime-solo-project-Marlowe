import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchWaterData(action) {
    // console.log('inside fetchWaterData()', action);
    try {
        const waterData = yield axios.get(`/api/lakes/${action.payload}`)
        // console.log('inside waterData saga', waterData.data)
        yield put({ type: 'SET_WATER_DATA', payload: waterData.data })
    } catch (err) {
        console.log('error in fetchWaterData saga', err)
    }
}

function* waterDataSaga() {
    yield takeEvery('WATER_DATA', fetchWaterData)
}

export default waterDataSaga;



