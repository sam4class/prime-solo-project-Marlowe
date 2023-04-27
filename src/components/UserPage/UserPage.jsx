import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

function UserPage() {
  // console.log('in UserPage()')

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const lakeList = useSelector((store) => store.lakeList);
  const [isLoading, setIsLoading] = useState(true);
  // const btn = document.getElementById('btn');
  // const [color, setColor] = useState();
  // const  userNotes = useSelector((store) => store.userNotes);


  function handleOnboarded() {
    dispatch({
      type: 'SET_ONBOARD',
      payload: user.id
    })
      dispatch({ 
        type: 'FETCH_USER' 
      })
      dispatch({
        type: 'FETCH_LAKES'
      })
    
    history.push('/favorite')
  }

  //i need to figure out how to conditionally render this to make sure it's grabbing the changed onboarded
  useEffect(() => {
    console.log('in user', user)
    if (user.onboarded === true) {
      history.push('/favorite') 
    }
    setIsLoading(false);
  }, [user])

  if(isLoading){
    return <p>Grabbing Favortie Lakes . . .</p>
  }

  return (
    <div className="container">
      <div className="textBoxFav">
      <Typography variant="h6"
        
        mb={2}
        align="center"
        className="pickText"
      >
        Welcome, {user.username}!
      </Typography>

      {/* <p>Your ID is: {user.id}</p> */}
      <center>
        <Typography variant="h7"
          mt={4}
          mb={2}
          align="center"
          className="pickText"
        >
          <h3>Pick ALL the Lakes to Watch this Summer:</h3>
        </Typography>
        <Typography
        variant='body2'
        className="pickText">
          After selecting your favorite lakes, hit SUBMIT button
        </Typography>
      </center>
      </div>

      {lakeList.length ?
        <>
          {lakeList.map((item) => {
            return (
              <p key={item.id}>
                <p className="listBox"       onClick={(event) => {
                      event.target.style.backgroundColor = 'green'
                      // console.log('clicking for fav!', item.id)
                      dispatch({
                        type: 'FAV_LAKES',
                        payload: {
                          lakes_id: item.id,
                        }
                      });
                    }}> <i className='fa fa-heart'></i> {item.name}</p>

                {/* <Box
                  m={1}
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="flex-end">
                  <button
                    className='favBtn'
                    onClick={(event) => {
                      event.target.style.backgroundColor = 'green'
                      // console.log('clicking for fav!', item.id)
                      dispatch({
                        type: 'FAV_LAKES',
                        payload: {
                          lakes_id: item.id,
                        }
                      });
                    }}>FAV LAKE</button>
                </Box> */}
              </p>)

          })}
          <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            className="submitBtn">
            <Button
              variant='contained'
              onClick={handleOnboarded}>Submit Favorites</Button>
          </Box>
        </> : <p>List Timed Out</p>}

      <br />
      <Box
        m={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end">
        <LogOutButton className="btn" />
      </Box>
    </div>
  );


}

// this allows us to use <App /> in index.js
export default UserPage;
