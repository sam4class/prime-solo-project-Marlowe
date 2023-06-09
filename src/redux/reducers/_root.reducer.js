import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import lakeList from './lakeList.reducer';
import waterData from './waterData.reducer';
import userNotes from './note.reducer';
import favLakeList from './getFavorite.reducer';

// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  lakeList,
  waterData,
  userNotes,
  favLakeList,
});

export default rootReducer;
