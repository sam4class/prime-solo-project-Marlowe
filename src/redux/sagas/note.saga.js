import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* postNote(action){
try{
    yield axios.post('/api/notes', action.payload);
    // console.log('action.payload in postNote', action.payload)
    yield put({type: 'FETCH_NOTES'})

}catch(err){
    console.log('error in postNote saga', err)
}
}

function* noteSaga(){
    yield takeEvery('SET_NEW_NOTE', postNote);
}

export default noteSaga;