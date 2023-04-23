import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

function UserPage() {
  // console.log('in UserPage()')

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const lakeList = useSelector((store) => store.lakeList);
  // const  userNotes = useSelector((store) => store.userNotes);


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
                  <Typography variant="h4"
                mt={4}
                mb={2}
                color="primary"
                align="center"
            className="header"
            >
              Welcome, {user.username}!
            </Typography>
     
      {/* <p>Your ID is: {user.id}</p> */}
      <center>
      <Typography variant="h4"
                mt={4}
                mb={2}
                color="primary"
                align="center"
            className="header"
            >
               <h3>Pick Three Lakes to Watch:</h3>
            </Typography>
            </center>
      
      {lakeList.length ?
      <>
            {lakeList.map((item) => {
                return (
                    <ul key={item.id}> 
                        <li className="listBox">{item.name}</li>
                        
                        <Button 
                        variant='primary'
                        onClick={() => {
                          // console.log('clicking for fav!', item.id)
                          dispatch({
                            type: 'FAV_LAKES', 
                            payload: {
                              lakes_id: item.id,
                            }});
                        }}>Fav Lake</Button>
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
