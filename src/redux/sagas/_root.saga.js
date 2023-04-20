import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fetchLakes from './fetchLakes.saga';
import waterDataSaga from './waterData.saga';
import favoriteLakes from './favoriteLakes.saga';
import fetchNotes from './getNotes.saga';
import noteSaga from './note.saga';
import deleteNote from './delete.saga';
import fetchFavLakes from './getFavLakes.saga';
import putOnboarded from './putOnboarded.saga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    fetchLakes(),
    waterDataSaga(),
    favoriteLakes(),
    fetchNotes(),
    noteSaga(),
    deleteNote(),
    fetchFavLakes(),
    putOnboarded(),
    ]);
}
