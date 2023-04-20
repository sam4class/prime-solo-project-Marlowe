import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchAllNotes(){
    // console.log('inside fetchNotes()')
    try{
        const allNotes = yield axios.get('/api/notes');
        // console.log('grabbing notes in saga', allNotes.data);
        yield put({type: 'SET_NOTES', payload: allNotes.data})
    }catch(err) {
        conaole.log('error getting notes in saga', err)
    }
}

function* fetchNotes() {
    yield takeEvery("FETCH_NOTES", fetchAllNotes);
}

export default fetchNotes;