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
                Top Swimming in Minneapolis
            </Typography>
        </center>
        <Typography
            variant="body2"
            className="key"
        >
            Blue means 'Swim!'<br />
            Green Alge means caution . . .<br />
            Orange means 'Don't Do It!'
        </Typography>

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
                            <ul key={item.id}>
                                {item.water_quality_status === 'GOOD' ?
                                    <li id='blueGood' className="listBox" onClick={() => {
                                        console.log('clicking')
                                        dispatch({
                                            type: 'WATER_DATA',
                                            payload: item.id
                                        });
                                        history.push('/waterData')
                                    }}>{item.name}</li> :
                                    item.water_quality_status === 'FAIR' ?
                                        <li id='greenFair' className="listBox" onClick={() => {
                                            console.log('clicking')
                                            dispatch({
                                                type: 'WATER_DATA',
                                                payload: item.id
                                            });
                                            history.push('/waterData')
                                        }}>{item.name}</li> :
                                        item.water_quality_status === 'BAD' ?
                                            <li id='redBad' className="listBox" onClick={() => {
                                                console.log('clicking')
                                                dispatch({
                                                    type: 'WATER_DATA',
                                                    payload: item.id
                                                });
                                                history.push('/waterData')
                                            }}>{item.name}</li> : <></>
                                }
                            </ul>
                        // </center>
                        // </Typography>
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