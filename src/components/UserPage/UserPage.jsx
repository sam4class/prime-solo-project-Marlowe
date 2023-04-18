import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import NotesForm from '../NotesForm/NotesForm';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function UserPage() {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const lakeList = useSelector((store) => store.lakeList);

  useEffect(() => {
    dispatch({type: 'FETCH_NOTE'})
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
                          dispatch({type: 'FAV_LAKES', payload: item.id,}); //do i make state to hold them?
                        }}>Fav Lake</button>
                    </ul>
                        
                )
            }) : <>
            <p>show the three lakes up top</p>
            </>} 
            <button onClick={toNotesPage}>Make a Note</button>
            {/* <NotesForm /> */}
      <LogOutButton className="btn" />
      <hr/>
      <h2>Your Notes</h2>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
