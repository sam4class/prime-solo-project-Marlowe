import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import NotesForm from '../NotesForm/NotesForm';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function UserPage() {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const lakeList = useSelector((store) => store.lakeList);
  const  userNotes = useSelector((store) => store.userNotes);
  const favsArray = [];
 
  useEffect(() => {
    dispatch({type: 'FETCH_NOTES'})
    // dispatch({ type: 'FETCH_FAV_SPACES'})
  }, []);

  function toNotesPage(){
    history.push('/notes')
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      <h3>Pick Three Lakes to Watch:</h3>
      
      {lakeList.length ?
        
            lakeList.map((item) => {
                return (
                    <ul key={item.id}> 
                        <li>{item.name}</li>
                        
                        <button onClick={() => {
                          console.log('clicking for fav!')
                          dispatch({type: 'FAV_LAKES', payload: item.id,});
                        }}>Fav Lake</button>
                    </ul>)
            }): <>
            <p>Your Lakes</p>
            </>} 


            <button onClick={toNotesPage}>Make a Note</button>
            {/* <NotesForm /> */}
      <LogOutButton className="btn" />
      <hr/>
            <div>
       {userNotes ?
          userNotes.map((item) => {
            return(<>
            <ul key={item.id}>
            <li>Lakes: {item.name}</li>
            <li>Date: {item.date}</li>
            <li>Note: {item.note}</li> 
            <button id={item.id} onClick={() => {
              dispatch({
                type: 'DELETE_NOTE',
                payload: item.id
              })
            }}>Delete Note</button>
            </ul>
         </> )}):<p></p>}
            </div>
      <br/>
      </div>
  );
  

}

// this allows us to use <App /> in index.js
export default UserPage;
