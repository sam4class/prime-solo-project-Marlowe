import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Typography, Button, Box } from "@mui/material";


function LakesPage() {
    // console.log('inside LakesPage()');
    const dispatch = useDispatch();
    const history = useHistory();

    const lakeList = useSelector((store) => store.lakeList);
    // console.log('this is lakeList', lakeList);
    const user = useSelector((store) => store.user)

    useEffect(() => {
        dispatch({
            type: 'FETCH_LAKES'
        })
    }, []);

    function toSignIn() {
        history.push('/login')
    }

    function toRegister() {
        history.push('/registration')
    }

    return (<>
        <center>
            <h3 className="header">Lakeside</h3>
            {/* <Typography
            variant="h3"
            color="primary"
            mb={2}
            className="header">
                Lakeside
            </Typography> */}
            <Typography 
            variant="h6"
            className="topText"
            align="center"
            >
                Top Swimming Beaches in Mpls
            </Typography>
        </center>

        <center>
            <Typography
                variant="subtitle3"
                className="clickForDataText"
            >
                Click On a Lake to See Water Data
            </Typography>
        </center>
        <div>
            {lakeList.length &&
                lakeList.map((item) => {
                    return (
                        // <Typography
                        // variant="h8"
                        // align="center"
                        // >
                        // <center>
                            <p key={item.id}>
                                {item.water_quality_status === 'GOOD' ?<>
                                    <li id='blueGood' className="listBox" onClick={() => {
                                        console.log('clicking')
                                        dispatch({
                                            type: 'WATER_DATA',
                                            payload: item.id
                                        });
                                        history.push('/waterData')
                                    }}> <i className="fa-solid fa-person-swimming"></i> {item.name}</li> </>:
                                    item.water_quality_status === 'FAIR' ?
                                        <li id='greenFair' className="listBox" onClick={() => {
                                            console.log('clicking')
                                            dispatch({
                                                type: 'WATER_DATA',
                                                payload: item.id
                                            });
                                            history.push('/waterData')
                                        }}><i className='fas fa-exclamation-triangle'></i> {item.name}</li> :
                                        item.water_quality_status === 'BAD' ?
                                            <li id='redBad' className="listBox" onClick={() => {
                                                console.log('clicking')
                                                dispatch({
                                                    type: 'WATER_DATA',
                                                    payload: item.id
                                                });
                                                history.push('/waterData')
                                            }}><i className='fas fa-ban'></i> {item.name}</li> : <></>
                                }
                            </p>
                        // {/* </center>
                        //  </Typography> */}
                    )

                })}
                       <center>
                        
            <Typography
           
                variant="subtitle3"
                className="clickForDataText"
            >
                Register to watch your Favorite Lakes all summer!
            </Typography>
        </center>



            <Box
                m={1}
                mt={3}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                 
                <Button
                    variant="contained"
                    align="right"
                    className="regBtn"
                    onClick={toRegister}>Register</Button>
                    
            </Box>

            <Box
                m={1}
                mt={3}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
              {user.onboarded ?
              <Button
              variant="contained"
              onClick={toSignIn}>
                Back To Favorites
              </Button>
            :  <Button
                    variant="contained"
                    onClick={toSignIn}>Sign In</Button>}
            </Box>
        </div>

    </>)
}

export default LakesPage;