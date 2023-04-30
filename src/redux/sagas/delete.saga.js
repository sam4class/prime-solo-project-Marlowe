import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects';

function* deleteNoteFromList(action) {
    // console.log('inside delete saga', action.payload)
    try {
        yield axios.delete(`/api/notes/${action.payload}`)
        yield put({ type: 'FETCH_NOTES' })
    } catch (err) {
        console.log('inside delete saga', err)
    }
}

function* deleteNote() {
    yield takeEvery('DELETE_NOTE', deleteNoteFromList)
}

export default deleteNote;