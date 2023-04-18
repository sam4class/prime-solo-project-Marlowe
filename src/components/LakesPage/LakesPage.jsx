import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LakesPage(){
    console.log('inside LakesPage()');
    const dispatch = useDispatch();
    const history = useHistory();

    const lakeList = useSelector((store) => store.lakeList);
    console.log('this is lakeList', lakeList);

    useEffect(() => {
        dispatch({
            type: 'FETCH_LAKES'
        })
    }, []);

    function toSignIn(){
        history.push('/login')
    }

    function toRegister() {
        history.push('/registration')
    }

    return(<>
        <h1>Top Swimming Lakes in Minneapolis:</h1>
        <div>
            {lakeList.length &&
            lakeList.map((item) => {
                return (
                    <ul key={item.id}>
                        <li onClick={() => {
                            console.log('clicking')
                            dispatch({
                                type: 'WATER_DATA',
                                payload: item.id
                            });
                            history.push('/waterData')
                        }}>{item.name}</li>
                        </ul>
                )
            })}
            <button onClick={toRegister}>Register</button>
            <button onClick={toSignIn}>Sign In</button>
        </div>
    </>)
}

export default LakesPage;