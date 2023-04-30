import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import NotePage from "../NotePage/NotePage";
import { Button, Box, Typography } from "@mui/material";


function UserFavoritePage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const favLakeList = useSelector((store) => store.favLakeList);
    const user = useSelector((store) => store.user);
    
    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES' })
        dispatch({ type: 'FETCH_FAV'})
        // dispatch({ type: 'FETCH_LAKES' })
        setIsLoading(false);
    }, []);

    if(isLoading){
        return <p>Grabbing Favortie Lakes . . .</p>
      }

    function toNotesPage() {
        history.push('/notes')
    }

    function onboardedOff() {
        dispatch({
            type: "SET_ONBOARD_OFF",
            payload: user.id
        })
    }

    return (<>

        <Typography
            m={3}
            variant="h5"
            className="whiteText">
            Your Lakes:
        </Typography>

        {favLakeList.length ?
            <>
                {favLakeList.map((item) => {
                    // console.log('this is item', item)
                    if (item.user_id === user.id) {
                        return (<>
                            <p key={item.id}>
                                {item.water_quality_status === 'GOOD' ?
                                    <li key={item.id} id='blueGood' className='listBox' onClick={() => {
                                        // console.log('clicking', item.lakes_id)
                                        dispatch({
                                            type: 'WATER_DATA',
                                            payload: item.lakes_id
                                        });
                                        history.push('/waterData')
                                    }}>
                                        <i className="fa-solid fa-person-swimming"></i> {item.name}</li> :
                                    item.water_quality_status === 'FAIR' ?
                                        <li key={item.id} id='greenFair' className='listBox' onClick={() => {
                                            // console.log('clicking', item.lakes_id)
                                            dispatch({
                                                type: 'WATER_DATA',
                                                payload: item.lakes_id
                                            });
                                            history.push('/waterData')
                                        }}>
                                            <i className='fas fa-exclamation-triangle'></i> {item.name}</li> :
                                        item.water_quality_status === 'BAD' ?
                                            <li key={item.id} id='redBad' className='listBox' onClick={() => {
                                                // console.log('clicking', item.lakes_id)
                                                dispatch({
                                                    type: 'WATER_DATA',
                                                    payload: item.lakes_id
                                                });
                                                history.push('/waterData')
                                            }}>
                                                <i className='fas fa-ban'></i> {item.name}</li>
                                            : <></>}</p>
                        </>)
                    }
                })}  </> : <></>}
        <Box
            m={1}
            mt={5}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end">
            <Button
                variant="contained"
                size='small'
                onClick={toNotesPage}>Make a Note</Button>
        </Box>

        <Box
            m={1}
            mt={4}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end">
            <Button
                variant="contained"
                size='small'
                onClick={onboardedOff}>Add Another Lake</Button>
        </Box>
        <hr />
        <NotePage />
    </>
    )
}
export default UserFavoritePage;