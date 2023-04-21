import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import NotesForm from '../NotesForm/NotesForm';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import UserFavoritePage from '../UserFavoritePage/UserFaoritePage';

function UserPage() {
  // console.log('in UserPage()')

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const lakeList = useSelector((store) => store.lakeList);
  const  userNotes = useSelector((store) => store.userNotes);


  // function toNotesPage(){
  //   history.push('/notes')
  // }

  function handleOnboarded(){
    dispatch({
      type: 'SET_ONBOARD',
      payload: user.id
    })
    history.push('/favorite')
  }
 
  useEffect(() => {
    console.log('in user', user)
    
    if(user.onboarded === true){
      history.push('/favorite')
    }
  }, [user])

  
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      <h3>Pick Three Lakes to Watch:</h3>
      
      {lakeList.length ?
      <>
            {lakeList.map((item) => {
                return (
                    <ul key={item.id}> 
                        <li>{item.name}</li>
                        
                        <button onClick={() => {
                          console.log('clicking for fav!', item.id)
                          dispatch({
                            type: 'FAV_LAKES', 
                            payload: {
                              lakes_id: item.id,
                            }});
                        }}>Fav Lake</button>
                    </ul>)
                    
            })} 
            <button onClick={handleOnboarded}>Submit Favorites</button>
            
            </> :<></>}
            
           
      <LogOutButton className="btn" />

      </div>
  );
  

}

// this allows us to use <App /> in index.js
export default UserPage;
