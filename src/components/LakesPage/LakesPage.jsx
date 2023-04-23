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
    console.log('this is lakeList', lakeList);

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
            <Typography variant="h4"
                mt={4}
                mb={2}
                color="primary"
                align="center"
            className="header"
            >
                Top Swimming Beaches in Mpls
            </Typography>
        </center>
        {/* <Typography
            variant="body2"
            className="key"
        >
            Blue means 'Swim!' <i className="fa-solid fa-person-swimming"></i>
            <br />
            Green Alge means caution . . .<i className='fas fa-exclamation-triangle'></i> 
            <br />
            Orange means 'Don't Do It!' <i className='fas fa-ban'></i>
        </Typography> */}

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
                                    <p id='blueGood' className="listBox" onClick={() => {
                                        console.log('clicking')
                                        dispatch({
                                            type: 'WATER_DATA',
                                            payload: item.id
                                        });
                                        history.push('/waterData')
                                    }}> <i className="fa-solid fa-person-swimming"></i> {item.name}</p> </>:
                                    item.water_quality_status === 'FAIR' ?
                                        <p id='greenFair' className="listBox" onClick={() => {
                                            console.log('clicking')
                                            dispatch({
                                                type: 'WATER_DATA',
                                                payload: item.id
                                            });
                                            history.push('/waterData')
                                        }}><i className='fas fa-exclamation-triangle'></i> {item.name}</p> :
                                        item.water_quality_status === 'BAD' ?
                                            <p id='redBad' className="listBox" onClick={() => {
                                                console.log('clicking')
                                                dispatch({
                                                    type: 'WATER_DATA',
                                                    payload: item.id
                                                });
                                                history.push('/waterData')
                                            }}><i className='fas fa-ban'></i> {item.name}</p> : <></>
                                }
                            </p>
                        // {/* </center>
                        //  </Typography> */}
                    )

                })}

            <Box
                m={1}
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
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Button
                    variant="outlined"
                    onClick={toSignIn}>Sign In</Button>
            </Box>
        </div>

    </>)
}

export default LakesPage;